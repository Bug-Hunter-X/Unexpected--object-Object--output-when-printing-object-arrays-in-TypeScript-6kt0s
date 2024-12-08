function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This works fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArray(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArray(myMixedArray); // This works fine

const myObjectArray: { name: string; age: number }[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];
printArray(myObjectArray); //This will print [object Object] multiple times, not the actual object contents.