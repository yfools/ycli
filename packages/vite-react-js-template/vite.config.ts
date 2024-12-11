import path, { join } from "path";
import { defineConfig } from "vite";
export default defineConfig(({ command, mode }) => {
  console.log(path.dirname(process.cwd()),process.cwd())
  return {
    base:'viteApp',
    root: path.join(process.cwd(), "/public"),
  };
});
