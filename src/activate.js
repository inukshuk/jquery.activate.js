/*global jQuery: true, window: true */
"use strict";

(function ($, window, activate, version, undefined) {
	if ($ === undefined) { return false; }

	$.fn[activate] = function (options) {
		var $$ = $.extend({}, this);
		
		if ($$.length) {
			options = $.extend({}, $.fn[activate].defaults, options);
			
			$$.bind([options.trigger,activate].join('.'), function () {
				var current = $(this), others;
				
				switch (options.mode) {
					case 'once':
						$$.unbind([options.trigger,activate].join('.'));
						current.addClass(options.css);
						
						if ($.isFunction(options.activate)) {
							options.activate.apply(current, []);
						}
						
						break;
						
					case 'radio':
						others = $$.filter('.' + options.css).not(current[0]).removeClass(options.css);

						if (others.length && $.isFunction(options.deactivate)) {
							options.deactivate.apply(others, []);
						}
						
						if (!current.hasClass(options.css)) {
							current.addClass(options.css);
						
							if ($.isFunction(options.activate)) {
								options.activate.apply(current, []);
							}	
						}

						break;
						
					default:
						others = $$.filter('.' + options.css).not(current[0]).removeClass(options.css);

						if (others.length && $.isFunction(options.deactivate)) {
							options.deactivate.apply(others, []);
						}

						if (current.hasClass(options.css)) {
							current.removeClass(options.css);
							if ($.isFunction(options.deactivate)) {
								options.deactivate.apply(current, []);
							}
						}
						else {
							current.addClass(options.css);
							if ($.isFunction(options.activate)) {
								options.activate.apply(current, []);
							}							
						}
						
						break;
				}
			});
		}

		return $$;
	};
		
	$.fn[activate].defaults = {
		mode: 'toggle',
		css: 'active',
		trigger: 'click',
		activate: null,
		deactivate: null
	};
	
	$.fn[activate].version = version;

})(jQuery, window, 'activate', '0.1');