# Unexpected [object Object] output when printing object arrays in TypeScript

This repository demonstrates a subtle issue in TypeScript related to printing object arrays.  When a function accepts an array of any type (`any[]`) and receives an array of objects, simply iterating and logging the elements will result in '[object Object]' being printed for each object instead of the object's properties.

The `bug.ts` file shows the problematic code. The `bugSolution.ts` provides a corrected version that properly handles the printing of object arrays.  This issue highlights the need for more explicit type handling when dealing with arrays of different data structures in TypeScript.