# test-with-data-folder

Take a test data folder and automatically copy, modify, compare against expected data, and remove.

## Example

    const testWithDataFolder = require("test-with-data-folder");
    const { testCase1Func } = require("./test-case-1/testCase1Func"); // Function under test

    test('test case 1', () => {
      // Define paths
      const inputFolder = "./tests/test-case-1/input";
      const expectedFolder = "./tests/test-case-1/expected";
      const temporaryFolder = "./tests/test-case-1/temp";

      // Define the function under test
      const testFunction = () => { testCase1Func(temporaryFolder); };

      // Run the test
      testWithDataFolder(testFunction, inputFolder, expectedFolder, temporaryFolder);
    });

The `testWithDataFolder` method will:

1. Delete `temporaryFolder`
2. Copy `inputFolder` to `temporaryFolder`
3. Run `testFunction()`
4. Compare `temporaryFolder` against `expectedFolder`
5. Delete `temporaryFolder`
