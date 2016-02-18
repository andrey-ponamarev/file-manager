const filters = [
	{
		title: 'File Name',
		type : 'name'
	},
	{
		title: 'File Type',
		type : 'type'
	},
	{
		title: 'Size (Kb)',
		type : 'size'
	}
];

export default class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: '',
			sortUp: false
		}
	}

	sortBy(filterType) {
		let sortUp = this.state.sortUp;
		let active = this.state.active;

		// Activate filter
		if (active === filterType) {
			sortUp = !sortUp
		} else {
			active = filterType;
			sortUp = true
		}

		this.props.sortBy(filterType, !sortUp);

		this.setState({
			active,
			sortUp
		});
	}

	render() {
		let titles = filters.map((filter, index)=> {
			return <th key={index}
					   onClick={this.sortBy.bind(this, filter.type)}
					   className={this.state.active == filter.type ? 'active' : '' }>
				{filter.title}
				{this.state.active == filter.type ?
					<span
						className={"glyphicon glyphicon-triangle-" +
						(this.state.sortUp ?"bottom":"top")}></span> : ''}
			</th>
		});

		return (
			<thead>
			<tr>
				{titles}
			</tr>
			</thead>
		);
	}
}