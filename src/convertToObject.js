'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfLines = sourceString.split(';');
  const convertableString = arrayOfLines.reduce((prev, line) => {
    const [key, value] = line.trim().split(':');

    if (key && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return convertableString;
}

module.exports = convertToObject;
