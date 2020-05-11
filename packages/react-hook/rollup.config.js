import babel from "@rollup/plugin-babel";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: [
      "react",
      "next/router",
      "use-navigator-online",
      "workbox-window",
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [babel({ babelHelpers: "bundled" })],
  },
];
