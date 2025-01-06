# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where you try to pass an array of strings to a function expecting a single string.  The solution shows how to correctly handle this using array indexing or other techniques depending on your intended behavior.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Compile using `tsc bug.ts`.
4. Run using `node bug.js`

You will encounter the error message: `Type 'string[]' is not assignable to type 'string'.`