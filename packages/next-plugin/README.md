# @next-with-offline/next-plugin

Next.js plugin for generating a Workbox. Intended to be used alongside
[@next-with-offline/react-hook](https://www.npmjs.com/package/@next-with-offline/react-hook) and
[@next-with-offline/service-worker](https://www.npmjs.com/package/@next-with-offline/service-worker).
Read [the top level documentation](https://github.com/cansin/next-with-offline#readme) for more information about usage.

[![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/next-plugin)](https://bundlephobia.com/result?p=@next-with-offline/next-plugin)
[![dependencies](https://img.shields.io/librariesio/release/npm/@next-with-offline/next-plugin)](https://libraries.io/npm/@next-with-offline%2Fnext-plugin)
[![build](https://img.shields.io/travis/com/cansin/next-with-offline)](https://travis-ci.com/github/cansin/next-with-offline)
[![downloads](https://img.shields.io/npm/dm/@next-with-offline/next-plugin)](https://www.npmjs.com/package/@next-with-offline/next-plugin)
[![license](https://img.shields.io/github/license/cansin/next-with-offline)](<(https://github.com/cansin/next-with-offline/blob/master/LICENSE)>)

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
