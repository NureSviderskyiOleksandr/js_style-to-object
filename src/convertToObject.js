'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfLines = sourceString.split(';');
  const result = {};

  for (let i = 0; i < arrayOfLines.length; i++) {
    const line = arrayOfLines[i].trim().split(':');

    if (line[0] === undefined || line[0].length < 1) {
      continue;
    }

    if (line[1] === undefined || line[1].length < 1) {
      continue;
    }

    result[line[0].trim()] = line[1].trim();
  }

  return result;
}

module.exports = convertToObject;
