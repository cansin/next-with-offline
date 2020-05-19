# @next-with-offline/service-worker

Code utilities for configuring a service worker.

[![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/service-worker)](https://bundlephobia.com/result?p=@next-with-offline/service-worker) 
[![dependencies](https://img.shields.io/librariesio/release/npm/@next-with-offline/service-worker)](https://libraries.io/npm/@next-with-offline%2Fservice-worker) 
[![build](https://img.shields.io/travis/com/cansin/next-with-offline)](https://travis-ci.com/github/cansin/next-with-offline) 
[![downloads](https://img.shields.io/npm/dm/@next-with-offline/service-worker)](https://www.npmjs.com/package/@next-with-offline/service-worker) 
[![license](https://img.shields.io/github/license/cansin/next-with-offline)](../../LICENSE)

## Install

```bash
yarn add @next-with-offline/service-worker
```

## Basic Usage

```js
import hasOffline from "@next-with-offline/service-worker";

hasOffline({
  cleanupOutdatedCaches: true,
  offlineGoogleAnalytics: false,
  offlinePath: "/offline",
  showReloadPrompt: false,
});
```
