# React + TypeScript + Vite + manifest v3, simple boilerplate

This template provides a fast and minimal setup to get working with Browser Extension Development.

## Usage

just clone this repository and start using it!

```console
npm run dev
```

## file structure

there are three main directories in `./src/`:

- [background](./src/background/): [service worker](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers). background pages provide an environment that lives independent of any other window or tab. This allows extensions to observe and act in response to events.
- [content](./src/content/): this code injects into the DOM and can get access to page data. [see more](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)
- [popup](./src//popup/): the ui that is shown when clicking the extension in the toolbar. [see more](https://developer.chrome.com/docs/extensions/reference/api/action?#popup)

## Build

**take a note that manifest v3 needs an icon to work properly.**

for using your costume icon place your `icon.png` file in `./src/assets/` directory and replace it with default one.
then run build command:

```console
npm run build
```
