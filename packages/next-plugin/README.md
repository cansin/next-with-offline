# @next-with-offline/next-plugin

Next.js plugin for generating a [Workbox service worker](https://developers.google.com/web/tools/workbox).
It auto-magically sets up certain aspects like pre-caching `public` folder and cache busting exclusions in order
to get the most out of Workbox with Next.js.
Heavily inspired from [shadowwalker/next-pwa](https://github.com/shadowwalker/next-pwa).

![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/next-plugin) ![dependencies](https://img.shields.io/david/cansin/next-with-offline?path=packages%2Fnext-plugin) ![build](https://img.shields.io/travis/com/cansin/next-with-offline) ![downloads](https://img.shields.io/npm/dm/@next-with-offline/next-plugin) ![license](https://img.shields.io/github/license/cansin/next-with-offline)

## Install

```bash
yarn add @next-with-offline/next-plugin
```

## Basic Usage

Update or create `next.config.js` with

```js
const withOffline = require("@next-with-offline/next-plugin");

module.exports = withOffline({
  workbox: {
    swSrc: "worker.js",
  },
  // .
  // ..
  // ... other Next.js config
});
```

Add `public/sw.js` and `public/sw.js.map` to your `.gitignore`

```git
public/sw.js
public/sw.js.map
```

## Configuration

There are options you can use to customize the behavior of this plugin
by adding `workbox` object in the Next.js config in `next.config.js`.
Alongside those documented `workbox` options below, this library would
also pass through any [Workbox plugin options](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin)
to the appropriate plugin

```js
const withOffline = require("@next-with-offline/next-plugin");

module.exports = withOffline({
  workbox: {
    dest: "public",
    swDest: "sw.js",
    swSrc: "worker.js",
    force: true,
  },
});
```

### Available Options

- **dest:** string - the destination folder to put generated files, relative to the project root.
  - defaults to `public`.
- **swDest:** string - the destination file to write the service worker code to.
  - defaults to `sw.js`.
- **swSrc:** string - the input file to read the custom service worker code from. Setting this
  switches to [InjectManifest](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.InjectManifest) plugin.
  If not set, [GenerateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW) plugin
  is used.
  - defaults to `false`.
- **force:** boolean - whether to force enable Workbox in dev mode.
  - defaults to `false`.
