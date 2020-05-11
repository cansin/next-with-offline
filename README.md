# @next-with-offline ![build](https://img.shields.io/travis/com/cansin/next-with-offline) ![license](https://img.shields.io/github/license/cansin/next-with-offline)

A suit of libraries that enables you to have a Workbox, Next.js, and React based Progressive Web App
with basic offline support.

- **[`@next-with-offline/next-plugin`](packages/next-plugin):** Next.js plugin for generating a Workbox.
- **[`@next-with-offline/react-hook`](packages/react-hook):** React hook for registering/using a Workbox.
- **[`@next-with-offline/service-worker`](packages/service-worker):** Code utilities for configuring a service worker.

## Install

```bash
yarn add @next-with-offline/next-plugin @next-with-offline/react-hook  @next-with-offline/service-worker
```

## Basic Usage

1. Update or create `next.config.js` with:

   ```js
   const withOffline = require("@next-with-offline/next-plugin");

   module.exports = withOffline({
     offline: {
       path: "/offline",
     },
     // .
     // ..
     // ... other Next.js config
   });
   ```

2. Add `public/sw.js` and `public/sw.js.map` to your `.gitignore`:

   ```git
   public/sw.js
   public/sw.js.map
   ```

3. Create `worker.js` with:

   ```js
   import { precacheAndRoute } from "workbox-precaching";
   import withNext from "@next-with-offline/service-worker";

   precacheAndRoute(self.__WB_MANIFEST);

   withNext({ offlinePath: "/offline", showSkipWaitingPrompt: true });
   ```

4. Update or create `pages/_app.js` with:

   ```js
   import useWorkbox from "@next-with-offline/react-hook";
   import { ThemeProvider } from "@material-ui/core/styles";
   import { SnackbarProvider } from "notistack";

   export default function App({ Component, pageProps }) {
     useWorkbox({
       offlinePath: "/offline",
       showSkipWaitingPrompt(onConfirm, onCancel) {
         // A function that returns a React element
         // calling `onConfirm` when user agrees to
         // reload, and `onCancel` if the user dismisses.
       },
     });

     return <Component {...pageProps} />;
   }
   ```

5. Create a basic `pages/offline.js` page:

    ```js
    import React from "react";
    
    export default function OfflinePage() {
      return (
        <p>
          Oops, you appear to be offline. This app requires an internet connection.
        </p>
      );
    }
    
    export default Page;
    ```

### Available Options

- **offlinePath:** string or boolean - a string pathname to the offline page.
  Or `false` if you want to disable. - defaults to `/offline`.
- **showSkipWaitingPrompt:** function or boolean - a function that returns
  a React element calling `onConfirm` when user agrees to reload, and `onCancel`
  if the user dismisses. Or `false` if you want to disable. - defaults to `false`.
