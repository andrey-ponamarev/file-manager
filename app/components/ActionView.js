import {Glyphicon, Table} from 'react-bootstrap';
let defaultActions = ['Download', 'Bookmark'];

const actions = {
	link : defaultActions,
	image: defaultActions,
	text : [...defaultActions, 'Edit'],
	web  : [...defaultActions, 'Preview', 'Edit']
};

export default class ActionView extends React.Component {

	makeBookmark(activeId) {
		this.getActiveModel(activeId).toggleBookmark();
	}

	makeAction(action, activeId) {
		switch (action){
			case 'Bookmark':
				this.makeBookmark(activeId);
				break;
		}
	}

	getActiveModel(activeId) {
		return this.props.collection.get(activeId);
	}

	fileActions(activeId){
		let fileType = this.getActiveModel(activeId).toJSON().format || 'link';

		return _.map(actions[fileType], (action, index)=> {
			return (
				<tr key={index}>
					<td onClick={this.makeAction.bind(this, action, activeId)}>
						{ action === 'Download' ? <Glyphicon glyph="download-alt"/> :
							action === 'Bookmark' ? <Glyphicon glyph="bookmark"/> :
								action === 'Preview' ? <Glyphicon glyph="eye-open"/> :
									action === 'Edit' ? <Glyphicon glyph="pencil"/> : null
						}
						<strong> {action} </strong>
					</td>
				</tr>
			)
		});
	}

	showActiveFile(activeId){
		return (
			<tr>
				<td>File selected:
					<strong>{this.getActiveModel(activeId).toJSON().name}</strong>
				</td>
			</tr>
		);
	}

	render() {
		let selectFile = (
			<tr>
				<td>Select file at the left side by clicking on it</td>
			</tr>
		);
		let activeId = this.props.activeId;

		return (
			<Table responsive hover bordered className="action-view">
				<thead>
					<tr>
						<th><strong>Action</strong></th>
					</tr>
				</thead>
				<tbody>
					{ !activeId ? selectFile : this.fileActions.bind(this, activeId)()}
					{ !activeId ? null : this.showActiveFile.bind(this, activeId)()}
				</tbody>
			</Table>
		);
	}
}