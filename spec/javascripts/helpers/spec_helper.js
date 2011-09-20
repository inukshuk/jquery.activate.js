beforeEach(function () {
	
  this.addMatchers({
    toBeActive: function () {
			return this.actual.hasClass('active')
    }
  })

});

function create(tag, attributes) {
	return $('<' + (tag || 'div') + '/>', attributes || {}).appendTo('body');
}

function click(element) {
	element.trigger('click');
}
