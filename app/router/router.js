let Router = Backbone.Router.extend({
	routes     : {
		""         : "file-list",
		"file-list": "file-list",
		"bookmark" : "bookmark",
		"create-new": "create-new"
	},
	"file-list": function () {
		this.currentPage = "file-list";
	},
	"bookmark" : function () {
		this.currentPage = "bookmark";
	},
	"create-new": function () {
		this.currentPage ="create-new";
	}
});

export default Router;

//class Router extends Backbone.Router{
//	constructor () {
//		super();
//		this.routes = {
//			""         : "fileList",
//			"file-list": "fileList",
//			"bookmark" : "bookmark",
//			"create-new": "createNewFile"
//		};
//		this.currentPage = '';
//	}
//
//	fileList() {
//		this.currentPage = "file-list";
//	}
//	bookmark() {
//		this.currentPage = "bookmark";
//	}
//	createNewFile() {
//		this.currentPage = "create-new";
//	}
//}
//
//export default Router;

