"use strict";

const cheerio = require("cheerio");

const extract = (pages) => {
  const elements = [];
  for (const page of pages) {
    try {
      const html = cheerio.load(page.page);
      const element = html(page.selector).html();
      elements.push({ url: page.url, element });
    } catch (e) {
      console.log(e);
    }
  }
  return elements;
};

module.exports = {
  extract,
};
