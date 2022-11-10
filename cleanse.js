"use strict";

const cleanse = (elements) =>
  elements.map((element) => {
    return {
      url: element.url,
      value: parseInt(element.element.replace("$", "")).toFixed(2),
    };
  });

module.exports = {
  cleanse,
};
