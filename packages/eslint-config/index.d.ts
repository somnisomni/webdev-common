import type { Linter } from "eslint";

declare module "@somni/eslint-config" {
  export const js: Linter.Config[];
  export const ts: Linter.Config[];
  export const vueTs: Linter.Config[];
}
