function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(JSON.stringify(arr[i]));
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray);

const myStringArray: string[] = ['a', 'b', 'c'];
printArray(myStringArray);

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArray(myMixedArray);

const myObjectArray: { name: string; age: number }[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
printArray(myObjectArray); // Now prints the actual object content