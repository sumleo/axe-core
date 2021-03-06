/* global axe */
describe('axe.utils.isHtmlElement', function() {
	it('returns true if given ul', function() {
		var node = document.createElement('ul');
		assert.isTrue(axe.utils.isHtmlElement(node));
	});

	it('returns true if given nav', function() {
		var node = document.createElement('nav');
		assert.isTrue(axe.utils.isHtmlElement(node));
	});

	it('returns true if given iframe', function() {
		var node = document.createElement('iframe');
		assert.isTrue(axe.utils.isHtmlElement(node));
	});

	it('returns false if given custom element', function() {
		var node = document.createElement('myElement');
		assert.isFalse(axe.utils.isHtmlElement(node));
	});

	it('returns false if given svg namespace', function() {
		var node = document.createElementNS('http://www.w3.org/2000/svg', 'a');
		assert.isFalse(axe.utils.isHtmlElement(node));
	});

	window.PHANTOMJS
		? it.skip
		: it('returns false if node has inherited svg namespace', function() {
				var svgNameSpace = 'http://www.w3.org/2000/svg';
				var node = document.createElementNS(svgNameSpace, 'svg');
				var child = document.createElementNS(svgNameSpace, 'a');
				child.setAttribute('href', '');
				child.textContent = 'Child Node';
				node.appendChild(child);

				var childNode = node.querySelector('a');
				assert.isFalse(axe.utils.isHtmlElement(childNode));
		  });
});
