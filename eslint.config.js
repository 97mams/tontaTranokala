//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config";
import { defineConfig } from "vite/types/internal/rollupTypeCompat.js";

export default [
  ...tanstackConfig,
  {
    rules: {
      "import/no-cycle": "off",
      "import/order": "off",
      "sort-imports": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/require-await": "off",
      "pnpm/json-enforce-catalog": "off",
      "@typescript-eslint/consistent-type-imports": "error"
    },
  },
  {
    ignores: ["eslint.config.js", ".prettierrc"],
  },
];
