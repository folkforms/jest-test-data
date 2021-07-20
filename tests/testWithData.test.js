const fs = require("fs-extra");
const testWithDataFolder = require("../testWithDataFolder");
const { testCase1Func } = require("./test-case-1/testCase1Func");

test('test case 1', () => {
  const inputFolder = "./tests/test-case-1/input";
  const expectedFolder = "./tests/test-case-1/expected";
  const temporaryFolder = "./tests/test-case-1/temp";

  const testFunction = () => { testCase1Func(temporaryFolder); };

  testWithDataFolder(testFunction, inputFolder, expectedFolder, temporaryFolder);
});

test('input folder can be empty', () => {
  const inputFolder = "./tests/test-case-2/input";
  const expectedFolder = "./tests/test-case-2/expected";
  const temporaryFolder = "./tests/test-case-2/temp";
  fs.removeSync(inputFolder);
  fs.removeSync(expectedFolder);
  fs.mkdirSync(inputFolder);
  fs.mkdirSync(expectedFolder);

  const testFunction = () => { testCase1Func(temporaryFolder); };

  testWithDataFolder(testFunction, inputFolder, expectedFolder, temporaryFolder);
});
