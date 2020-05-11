# @next-with-offline/react-hook

React hook for registering/using a Workbox.

![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/react-hook) ![dependencies](https://img.shields.io/david/cansin/next-with-offline?path=packages%2Freact-hook) ![build](https://img.shields.io/travis/com/cansin/next-with-offline) ![downloads](https://img.shields.io/npm/dm/@next-with-offline/react-hook) ![license](https://img.shields.io/github/license/cansin/next-with-offline)

## Install

```bash
yarn add @next-with-offline/react-hook
```

## Basic Usage

```js
import React from "react";

import { useOffline } from "@next-with-offline/react-hook";

export default function Component() {
  useOffline({
    offlinePath: "/offline",
    registerOptions: {},
    scriptURL: "sw.js",
    showSkipWaitingPrompt: false,
  });

  return <p>Hello World!</p>;
}
```
