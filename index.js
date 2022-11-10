const { scrape } = require("./scrape.js");
const { save } = require("./save.js");
const sources = require("./sources.json");
require("dotenv").config();

const run = async () => {
  const prices = await scrape(sources);
  try {
    await save(prices, ["url", "price"]);
  } catch (e) {
    console.error("error saving prices.csv", e);
  }
};

run();
