// 3. Build a Small TypeScript Project with Multiple Modules:
// Step 1: Create a math.ts module with some basic math functions (e.g., add, subtract).
// Step 2: Create a utils.ts module with a utility function (e.g., capitalize, logMessage).
// Step 3: Create a main.ts file where you import and use the functions from math.ts and utils.ts.

// Hint: Make sure to organize your functions properly and use appropriate module syntax with export and import.
import { add, subtract } from "./math";
import { capitalize, logMessage } from "./utils";

let sentence: string = "i don't know where is the path to home";

logMessage(capitalize(sentence));

logMessage(add(4, 4));

logMessage(subtract(4, 4));
