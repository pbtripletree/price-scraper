"use strict";

const cleanse = (elements) =>
  elements.map((element) => {
    return {
      url: element.url,
      value: parseFloat(element.element.replace("$", "")).toFixed(2),
    };
  });

module.exports = {
  cleanse,
};
