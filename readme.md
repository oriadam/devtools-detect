# devtools-detect

> Detect if DevTools is open

Useful for when you want something special to happen when DevTools is open. Like pausing canvas, adding style debug info, etc.

## Install - not yet functional

```
$ npm install devtools-isopen
```


## Usage

```html
<script src="node_modules/devtools-isopen/index.js"></script>
<script type="module">
	// Check if it's open
	console.log('Is DevTools open:', window.devtools.isOpen);

	// Get notified when it's opened/closed
	window.addEventListener('devtoolschange', event => {
		console.log('Is DevTools open:', event.detail.isOpen);
	});
</script>
```


## Support

- Chrome DevTools
- Safari DevTools
- Firefox DevTools
- Opera DevTools


## Caveats

Does not detect closing of the devtools


## License

MIT
