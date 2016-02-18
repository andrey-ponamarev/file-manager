import {Glyphicon, Input} from 'react-bootstrap';
const searchIcon = <Glyphicon glyph="search"/>;

export default class Search extends React.Component {
	search() {
		let files = this.props.files;
		let value = this.refs.search.getValue();
		let condition;

		// In case no search
		if(value === ''){
			value = '*';
		}

		// Create reg exp
		value     = value.replace(/\*/g, '.*');
		value     = '^' + value + '$';
		condition = new RegExp(value);

		this.props.searchBy('name', condition);
	}

	render() {
		return (
			<tr>
				<td className="col-md-4 col-xs-4"><Input
					type="text"
					ref="search"
					onChange={this.search.bind(this)}
					addonAfter={searchIcon}/></td>
				<td className="col-md-4 col-xs-4"></td>
				<td className="col-md-4 col-xs-4"></td>
			</tr>
		);
	}
};
