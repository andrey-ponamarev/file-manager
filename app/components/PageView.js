import {Grid, Row} from 'react-bootstrap';
import CreateNewFile from './CreateNewFile';
import FileList from './FileList';
import Controls from './Controls';
import collection from './../collections/FilesCollection.js';

const PAGE_SHOW = 'page page-show';
const PAGE_HIDE = 'page page-hide';

class View extends React.Component {
	constructor(){
		super();
		this.state = {
			currentPage: ''
		}
	}
	componentDidMount() {
		this.props.router.on('route', function(){
			this.setState({
				currentPage: this.props.router.currentPage
			});
		}.bind(this))
	}

	componentWillUnmount() {
		this.props.router.off('route', null);
	}

	render() {
		let currentPage = this.state.currentPage;
		let pageFileList;
		let pageNewFile;

		pageNewFile = pageFileList = 'page';
		switch (currentPage){
			case 'create-new':
				pageFileList = PAGE_HIDE;
				pageNewFile= PAGE_SHOW;
				break;
			case 'file-list':
			case 'bookmark':
				pageFileList = PAGE_SHOW;
				pageNewFile = PAGE_HIDE;
				break;
		}

		return (
			<Grid fluid>
				<div className={pageFileList}>
					<FileList
						router={this.props.router}
					    collection={collection}/>
					<Controls/>
				</div>
				<Row className={pageNewFile}>
					<CreateNewFile
						router={this.props.router}
						collection={collection}/>
				</Row>
			</Grid>
		)
	}
}

export default View;
