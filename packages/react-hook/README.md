# @next-with-offline/react-hook

Utilities for using Workbox with Next.js + React.

![size](https://img.shields.io/bundlephobia/minzip/@next-with-offline/react-hook.svg) ![dependencies](https://img.shields.io/david/cansin/@next-with-offline/react-hook.svg) ![build](https://img.shields.io/travis/com/cansin/@next-with-offline/react-hook) ![downloads](https://img.shields.io/npm/dt/@next-with-offline/react-hook) ![license](https://img.shields.io/npm/l/@next-with-offline/react-hook.svg)

## Install

```bash
yarn add @next-with-offline/react-hook
```

## Usage

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

## License

MIT © [cansin](https://github.com/cansin)
