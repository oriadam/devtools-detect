/*!
devtools-detect
Detect if DevTools is open
https://github.com/oriadam/devtools-detect
MIT License
*/
(function () {
	'use strict';

	let state = false;
	const detector = function () {}
	detector.toString = function () {
		if (state) return; // run once
		state = true;
		window.devtoolsopen = 1;
		window.dispatchEvent(new CustomEvent('devtoolschange', {detail: {isOpen: true}}));
	}
	
	const main = function() {
		console.log('%c', detector)
	};

	main();
	const interval = setInterval(main, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools_detect;
	}
})();
