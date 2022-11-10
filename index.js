const { scrape } = require("./scrape.js");
const { save } = require("./save.js");
const sources = require("./sources.json");
require("dotenv").config();

const run = async () => {
  const prices = await scrape(sources);
  try {
    await save(prices, ["url", "price"], "prices.csv");
    console.log("results saved as prices.csv!");
  } catch (e) {
    console.error("error saving csv", e);
  }
};

run();
