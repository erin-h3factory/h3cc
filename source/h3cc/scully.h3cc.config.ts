import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'h3cc',
  distFolder: './dist/h3cc', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
  puppeteerLaunchOptions: {
    args: [
      "--renderer",
      "--no-sandbox",
      "--no-service-autorun",
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-extensions"
    ]
  }
};