const shelljs = require("shelljs");
const fileio = require("@folkforms/file-io");

/**
 * Utility class for handling tests that involve test data folders. Copies `inputFolder` to
 * `temporaryFolder`, runs the given test function, then compares `temporaryFolder` with
 * `expectedFolder`.
 *
 * `testFunction` is executed with no arguments. If you need arguments you can pass it wrapped in an
 * anonymous function like `() => { testFunction(temporaryFolder); }`.
 *
 * @param {string} inputFolder folder containing input test data
 * @param {string} expectedFolder folder containing expected test data
 * @param {string} temporaryFolder temporary folder location
 * @param {string} testFunction function under test
 */
const testWithDataFolder = (testFunction, inputFolder, expectedFolder, temporaryFolder) => {
  // Make a copy of input folder in temporary folder
  shelljs.rm("-rf", temporaryFolder);
  shelljs.mkdir("-p", temporaryFolder);
  shelljs.cp("-r", `${inputFolder}/*`, temporaryFolder);

  // Run the given test function
  testFunction();

  // Compare temporary folder with expected folder
  const actualFiles = fileio.glob(`${temporaryFolder}/**`);
  const expectedFiles = fileio.glob(`${expectedFolder}/**`);

  // ...Check number of files
  expect(actualFiles.length).toEqual(expectedFiles.length);

  // ...Check file lists
  const modActualFiles = actualFiles.map(file => file.replace(temporaryFolder, expectedFolder));
  expect(modActualFiles).toEqual(expectedFiles);

  // ...Check file contents
  for(let i = 0; i < actualFiles.length; i++) {
    const actualContents = fileio.readLines(actualFiles[i]);
    const expectedContents = fileio.readLines(expectedFiles[i]);
    expect(actualContents).toEqual(expectedContents);
  }

  // Remove temporary folder
  shelljs.rm("-rf", temporaryFolder);
}

module.exports = testWithDataFolder;
