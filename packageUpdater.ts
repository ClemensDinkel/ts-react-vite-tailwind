import { execSync } from "child_process";

import { dependencies, devDependencies } from "./package.json";

const updateToLatest = (
  dependencies: Record<string, string> | undefined,
  isDev: boolean
) => {
  for (const pkg in dependencies) {
    try {
      console.log(`Updating ${pkg} to the latest version...`);
      execSync(`pnpm add ${isDev ? "-D " : ""}${pkg}@latest`, {
        stdio: "inherit",
      });
    } catch (err) {
      console.error(`Failed to update ${pkg}`);
    }
  }
};

updateToLatest(dependencies, false);
updateToLatest(devDependencies, true);
