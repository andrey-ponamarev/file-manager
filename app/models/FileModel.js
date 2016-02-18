class FileModel extends Backbone.Model {
	defaults() {
		return {
			name   : 'test.txt',
			format  : 'text',
			type    : 'Text file',
			size    : 0,
			bookmark: false
		}
	}

	initialize() {
		this.save();
	}

	toggleBookmark() {
		this.save({
			bookmark: !this.get('bookmark')
		});
	}
}

export default FileModel;
