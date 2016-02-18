import {Glyphicon} from 'react-bootstrap';

export default class FileDetails extends React.Component {
	render() {
		let file = this.props.file;
		let className = '';

		if(this.props.hidden){
			className += ' hidden';
		}

		if(this.props.active){
			className += ' active';
		}
		return (
			<tr className={className}
			    onClick={this.props.makeFileActive}>
				<td className="col-md-4 col-xs-4">{file.bookmark ?
					<Glyphicon glyph="bookmark"/> : null} {file.name}</td>
				<td className="col-md-4 col-xs-4">{file.type}</td>
				<td className="col-md-4 col-xs-4">{file.size}</td>
			</tr>
		)
	}
};
