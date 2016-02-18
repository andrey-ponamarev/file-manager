import {ButtonToolbar, Row, Col, Button, Input} from 'react-bootstrap';
import Controls from './Controls';

class CreateNewFile extends React.Component {
	constructor() {
		super();
		this.state = {
			fileName   : '',
			fileContent: ''
		}
	}

	saveFile() {
		let fileName = this.refs.fileName.getValue();
		let fileSize = this.refs.fileContent.getValue().length;

		this.props.collection.add({
			name: (fileName || 'test') + '.txt',
			size: fileSize
		});

		this.setState({
			fileName   : '',
			fileContent: ''
		});

		this.props.router.navigate('file-list', {trigger: true});
	}

	handleChange() {
		this.setState({
			fileName   : this.refs.fileName.getValue(),
			fileContent: this.refs.fileContent.getValue()
		});
	}

	render() {
		return (
			<Row>
				<Col className="create-new" xs={12} md={12}>
					<form>
						<Input type="text"
							   ref="fileName"
							   label="Title"
							   onChange={this.handleChange.bind(this)}
							   value={this.state.fileName}
							   placeholder="Enter file name"/>
						<Input type="radio"
							   label="Text file" checked readOnly/>
						<Input type="textarea"
							   ref="fileContent"
							   onChange={this.handleChange.bind(this)}
							   value={this.state.fileContent}
							   placeholder="Enter text"/>
						<Col className="pull-right">
							<ButtonToolbar>
								<Button right href="#file-list"> Cancel </Button>
								<Button right bsStyle="primary" onClick={this.saveFile.bind(this)}>Save</Button>
							</ButtonToolbar>
						</Col>
					</form>
				</Col>
				<Controls/>
			</Row>
		)
	}
}

export default CreateNewFile;
