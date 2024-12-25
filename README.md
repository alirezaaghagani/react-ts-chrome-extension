![logo](./public/rts-extention-logo.png)

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

<br/>
<br/>

> [!NOTE]
> If you want to change this pages names or directories take note that you should change this two files:

1. [vite.config.ts](./vite.config.ts) : change entry paths in `input` option :

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "./index.html",
        background: "src/background/background.ts",
        content: "src/content/content.ts",
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[name].[ext]",
      },
    },
  },
});
```

<br/>

2. [manifest.json](./public/manifest.json) : change following paths to the names you have chosen in `vite.config.ts`

```json
{
  "background": {
    "service_worker": "background/background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/content.js"]
    }
  ]
}
```

## Build

> [!WARNING] > **take a note that manifest v3 needs an icon to work properly.**

for using your custom icon, place your `icon.png` file in `./src/assets/` directory and replace it with default one.
then run build command:

```console
npm run build
```
