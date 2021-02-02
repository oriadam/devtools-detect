/// <reference lib="dom"/>

declare namespace devTools {
	interface DevTools {
		/**
		Whether DevTools is open.
		*/
		readonly isOpen: boolean;
	}

	interface DevToolsEvent extends Event {
		detail: DevTools;
	}
}

declare const devTools: devTools.DevTools;

export = devTools;
export as namespace devTools;

declare global {
	interface Window {
		addEventListener(
			type: 'devtoolschange',
			listener: (event: devTools.DevToolsEvent) => unknown,
			options?: boolean | AddEventListenerOptions
		): void;
	}
}
