# @next-with-offline/next-plugin

Next.js plugin for generating a Workbox.

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
  offline: {
    path: "/offline",
  },
  workbox: {
    dest: "public",
    swDest: "sw.js",
    swSrc: "worker.js",
    // .
    // ..
    // ... other workbox-webpack-plugin.InjectManifest options
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
