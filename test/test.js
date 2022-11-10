var assert = require("assert");

const { extract } = require("../extract.js");
const { cleanse } = require("../cleanse.js");
const { pull } = require("../pull.js");

describe("pull", async function () {
  it("should return html", async function () {
    const source = [
      {
        url: "https://www.york.ac.uk/teaching/cws/wws/webpage1.html",
        selector: "div",
      },
    ];
    const { pages } = await pull(source);
    assert.equal(pages.length, 1);
  });
});

describe("extract", function () {
  it("should return selected html", function () {
    const pages = [
      {
        url: "google.com",
        page: "<div><h2>$95</h2></div>",
        selector: "div > h2",
      },
    ];
    const elements = extract(pages);
    assert.strictEqual(elements[0].element, "$95");
  });
});

describe("cleanse", function () {
  it("should return formatted values", function () {
    const elements = [
      {
        url: "google.com",
        element: "$95",
      },
    ];
    const cleansed = cleanse(elements);
    assert.strictEqual(cleansed[0].value, "95.00");
  });
});
