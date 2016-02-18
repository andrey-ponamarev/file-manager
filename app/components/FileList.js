import {Button, Grid, Row, Col, Table} from 'react-bootstrap';
import Controls from './Controls';
import FileDetails from './FileDetails';
import ActionView from './ActionView';
import Filters from './Filters';
import Search from './Search';
import listensToClickOutside from 'react-onclickoutside/decorator';

class FileList extends React.Component {
	constructor() {
		super();
		this.state = {
			activeFile: '',
			activeId  : '',
			models    : []
		}
	}

	handleClickOutside() {
		// Make file inactive
		this.setState({
			activeFile: '',
			activeId  : ''
		});
	}

	pageFilter(page) {
		if (page === 'bookmark') {
			this.setState({models: this.getBookmarks()});
		} else if (page === 'file-list') {
			this.setState({models: this.getModels()});
		}
	}

	componentDidMount() {
		this._boundForceUpdate = this.forceUpdate.bind(this, null);
		this.props.collection.on('all', this._boundForceUpdate, this);
		this.props.router.on('route', function () {
			this.pageFilter(this.props.router.currentPage);
		}.bind(this));
	}

	componentWillUnmount() {
		this.props.router.off('route', null);
		this.props.collection.off('all', this._boundForceUpdate);
	}

	getModels() {
		return this.props.collection.models;
	}

	getBookmarks() {
		return this.props.collection.getBookmarks();
	}

	activeFile(model) {
		this.setState({
			activeFile: model.toJSON().name,
			activeId  : model.id
		});
	}

	searchBy(attr, condition) {
		let models = this.state.models;

		models = _.map(models, function (model) {
			if (condition !== true && condition.test(model.get(attr))) {
				model.hide = false;
			} else {
				model.hide = true;
			}
			return model;
		});

		this.setState({
			models: models
		});
	}

	sortModelsBy(attr, reverse) {
		let models = this.state.models;

		models = _(models).sortBy(function (model) {
			return model.get(attr);
		});

		if (reverse) {
			models.reverse()
		}

		this.setState({
			models: models
		});
	}

	render() {
		let that        = this;
		let activeId    = that.state.activeId;
		let fileDetails = _.map(this.state.models, function (model, index) {
			let file   = model.toJSON();
			let active = activeId === model.id;

			return (
				<FileDetails
					hidden={model.hide}
					active={active}
					file={file}
					key={index}
					makeFileActive={that.activeFile.bind(that, model)}/>
			)
		});

		let activeFile = this.state.activeFile;

		return (
			<Row className="file-manager">
				<Col xs={9} md={9}>
					<Table responsive hover bordered>
						<Filters
							sortBy={this.sortModelsBy.bind(this)}/>
						<tbody>
						{fileDetails}
						<Search searchBy={this.searchBy.bind(this)}/>
						</tbody>
					</Table>
				</Col>
				<Col xs={3} md={3}>
					<ActionView
						activeId={activeId}
						collection={this.props.collection}/>
				</Col>
			</Row>
		)
	}
}

export default listensToClickOutside(FileList);
