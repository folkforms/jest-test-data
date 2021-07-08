const fileio = require("@folkforms/file-io");

/**
 * Dummy test function that modifies all files in the given folder by replacing `a` => `1` and `b`
 * => `2`.
 *
 * @param {string} folder folder to modify
 */
const testCase1Func = folder => {
  const files = fileio.glob(`${folder}/**`);
  files.forEach(file => {
    let contents = fileio.readLines(file);
    contents = contents.map(line => line.replace(/a/g, "1"));
    contents = contents.map(line => line.replace(/b/g, "2"));
    fileio.writeLines(file, contents);
  });
};

module.exports = { testCase1Func };
