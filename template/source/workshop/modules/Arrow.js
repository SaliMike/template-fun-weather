'use strict';
import $ from 'jquery';

/**
 * @param {Object} arg - An object.
 * @param {string} arg.target - Main block
 * 
 */

const Arrow = {
	settings: {
		target: '',
	},
	init: function (args) {
		this.settings = $.extend(true, this.settings, args);
		this.settings.target.length ? this.catchDOM() : '';
	},
	catchDOM: function () {
		let _target = $(this.settings.target);
		this.$target = {
			element: _target
		};

		this.$target.element.length ? this.bindEvents() : '';
	},
	bindEvents: function () {
		this.$target.element.on('click', this.clickEvent.bind(this));

		$(window).scroll(this.scrollEvent.bind(this))
	},
	clickEvent: function () {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
	},
	scrollEvent: function (event) {
		let target = $(event.target);
		target.scrollTop() > (target.height() / 2) ? this.$target.element.addClass('-visible') : this.$target.element.removeClass('-visible');
	}
};

export {
	Arrow
};