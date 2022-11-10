const { pull } = require("./pull.js");
const { extract } = require("./extract.js");
const { cleanse } = require("./cleanse.js");

const scrape = async (
  sources,
  prices = [],
  timeout = process.env.MIN_TIMEOUT
) => {
  const { pages, errors } = await pull(sources, timeout);
  const elements = extract(pages);
  const cleansed = cleanse(elements);
  prices.push(...cleansed);
  if (
    errors.length > 0 &&
    parseInt(timeout) < parseInt(process.env.MAX_TIMEOUT)
  ) {
    console.log("retrying timed out urls...");
    return await scrape(errors, prices, timeout * 2);
  } else return prices;
};

module.exports = {
  scrape,
};
