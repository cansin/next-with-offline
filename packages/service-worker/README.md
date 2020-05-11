# @next-with-offline/service-worker

Code utilities for configuring a service worker.

![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/service-worker) ![dependencies](https://img.shields.io/david/cansin/next-with-offline?path=packages%2Fservice-worker) ![build](https://img.shields.io/travis/com/cansin/next-with-offline) ![downloads](https://img.shields.io/npm/dm/@next-with-offline/service-worker) ![license](https://img.shields.io/github/license/cansin/next-with-offline)

## Install

```bash
yarn add @next-with-offline/service-worker
```

## Basic Usage

```js
import withNext from "@next-with-offline/service-worker";

withNext({
  offlinePath: "/offline",
  showSkipWaitingPrompt: false,
});
```
