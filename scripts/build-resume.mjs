import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

// Offline/local PDF export only. Vercel serves the committed PDF and does not
// need Playwright or Chrome in its normal build.
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  try {
    ({ chromium } = require('../qa/node_modules/playwright'));
  } catch {
    throw new Error('PDF export requires Playwright. Install it in qa with npm install --prefix qa --no-save playwright, then rerun this script.');
  }
}
const source = fileURLToPath(new URL('../resume/steve-wohlwend.html', import.meta.url));
const output = fileURLToPath(new URL('../dist/assets/steve-wohlwend-resume.pdf', import.meta.url));
const windowsChrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const executablePath = process.env.RESUME_CHROME_PATH || (existsSync(windowsChrome) ? windowsChrome : undefined);
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(source).href, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.fonts.ready);
  mkdirSync(path.dirname(output), { recursive: true });
  await page.pdf({ path: output, format: 'Letter', preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false, tagged: true, outline: true });
  console.log('Generated corrected resume: ' + output);
} finally {
  await browser.close();
}
