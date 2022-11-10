const { Parser } = require("json2csv");
const fs = require("fs").promises;

const save = async (data, options) => {
  const parser = new Parser(options);
  const csv = parser.parse(data);
  await fs.writeFile("prices.csv", csv);
};

module.exports = {
  save,
};
