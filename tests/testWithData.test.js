const testWithDataFolder = require("../testWithDataFolder");
const { testCase1Func } = require("./test-case-1/testCase1Func");

test('test case 1', () => {
  const inputFolder = "./tests/test-case-1/input";
  const expectedFolder = "./tests/test-case-1/expected";
  const temporaryFolder = "./tests/test-case-1/temp";

  const testFunction = () => { testCase1Func(temporaryFolder); };

  testWithDataFolder(testFunction, inputFolder, expectedFolder, temporaryFolder);
});
