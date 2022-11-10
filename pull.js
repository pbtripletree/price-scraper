"use strict";

const puppeteer = require("puppeteer");

const pull = async (sources, timeout) => {
  const browser = await puppeteer.launch({ headless: true });
  const pages = [];
  const errors = [];
  for (const source of sources) {
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(timeout);
    try {
      console.info("requesting", source.url);
      await page.goto(source.url);
      pages.push({
        url: source.url,
        page: await page.content(),
        selector: source.selector,
      });
      console.info("html pulled");
    } catch (e) {
      console.error("timed out");
      errors.push(source);
    }
  }
  await browser.close();
  return { pages, errors };
};

module.exports = {
  pull,
};
