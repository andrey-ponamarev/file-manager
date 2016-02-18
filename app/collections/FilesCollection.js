import {Collection} from 'backbone';
import Store from 'backbone.localstorage';
import FileModel from './../models/FileModel.js';
import testFiles from '../utils/testFiles.js';

const STORAGE_NAME = 'store-for-files';

let collection;

class FileCollection extends Collection {
	constructor() {
		super();
		this.model = FileModel;
		this.localStorage = new Store(STORAGE_NAME);
	}

	getBookmarks() {
		return this.where({bookmark: true});
	}
}

collection = new FileCollection();

// For first load use test files
if( localStorage.getItem(STORAGE_NAME) === null ) {
	collection.set(testFiles);
}

collection.fetch();

export default collection;
