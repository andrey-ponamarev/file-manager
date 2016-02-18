import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap';

class Controls extends React.Component {
	render() {
		return (
			<Row className="control-panel">
				<Col>
					<ButtonToolbar>
						<Button href="#file-list">File list</Button>
						<Button href="#bookmark">Bookmark</Button>
						<Button className="pull-right" href="#create-new">Create New</Button>
					</ButtonToolbar>
				</Col>
			</Row>
		)
	}
}

export default Controls;
