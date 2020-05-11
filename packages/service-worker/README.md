# @next-with-offline/service-worker

Utilities for augmenting Workbox service worker code.

![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/service-worker.svg) ![dependencies](https://img.shields.io/david/cansin/@next-with-offline/service-worker.svg) ![build](https://img.shields.io/travis/com/cansin/@next-with-offline/service-worker) ![downloads](https://img.shields.io/npm/dt/@next-with-offline/service-worker) ![license](https://img.shields.io/npm/l/@next-with-offline/service-worker.svg)

## Install

```bash
yarn add @next-with-offline/service-worker
```

## Usage

```js
import withOffline from "@next-with-offline/service-worker";

withOffline({ offlinePath: "/offline", showSkipWaitingPrompt: true });
```

## License

MIT © [cansin](https://github.com/cansin)
