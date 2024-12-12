import type { Linter } from "eslint";

declare module "@somni/eslint-config" {
  export const js: Linter.Config[];
  export function generateTsLintConfig(tsconfigRootDir: string): Linter.Config[];
  export function generateVueTsLintConfig(tsconfigRootDir: string): Linter.Config[];
}
