import Router from './router/router.js';
import PageView from './components/PageView.js';

let router = new Router();

ReactDOM.render(
	<PageView router={router}/>,
	$('#app')[0]
);

Backbone.history.start();
