/*!
devtools-detect
Detect if DevTools is open
https://github.com/oriadam/devtools-detect
MIT License
*/
(function () {
	'use strict';
	
	const devtools = {
		isOpen: false
	};
	
	let interval;

	const detector = function () {}
	detector.toString = function () {
		if (devtools.isOpen) 
			return; // run once
		devtools.isOpen = true;
		window.dispatchEvent(new CustomEvent('devtoolschange', {detail: devtools}));
		clearInterval(interval); // run once
	}
	
	const main = function() {
		console.log('%c', detector);
	};

	main();
	interval = setInterval(main, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;	
	}
	
})();
