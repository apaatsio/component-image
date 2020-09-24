const puppeteer = require('puppeteer');

module.exports = async function(template, opts) {
  const browser = await puppeteer.launch(opts.puppeteerOptions);
  const page = await browser.newPage();
  await page.setContent(template);
  await page.setViewport(opts.viewport);
  if (opts.waitForFunction) {
    await page.waitForFunction(opts.waitForFunction);
  }
  const image = await page.screenshot(opts.image);
  browser.close();

  return image;
};
