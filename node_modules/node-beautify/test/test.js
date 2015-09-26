var fs = require('fs'),
	path = require('path'),
	should = require('should'),
	nodeBeautify = require('../node-beautify'),
	beautifyJs = nodeBeautify.beautifyJs;

function source(name, type) {
	type = type || 'source';
	var filepath = path.join(__dirname, type, name + '.src');
	return fs.readFileSync(filepath).toString();
}

function expected(name) {
	return source(name, 'expected');
}


describe('beautifyJs method', function() {

	it('should format javascript code', function() {

		beautifyJs(source('main')).should.equal(expected('main'));

	});


	it('should not preserve array indentation by default', function() {

		beautifyJs(source('default-arrays')).should.equal(expected('default-arrays'));

	});

	it('should have an option that preserves array indentation', function() {

		var options = { keepArrayIndentation: true };
		beautifyJs(source('tabbed-arrays'), options).should.equal(expected('tabbed-arrays'));

	});

});