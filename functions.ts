// intro

function printOperations(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers!");
  }

  console.log(a + b, a / b);
}

// The function call below should print: 12 1
printOperations(6, 6);

function exclaim(name, count) {
  for (let i = 0; i < count; i++) {
    console.log(`${name}!`);
  }
}

exclaim("Muriel", 6);

// paramter type annotations
function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}`!);
}

greetTripled("Hiya", 5);

// optional parameters

function proclaim(status?: string) {
  console.log(`I'm ${status || "not ready..."}`);
}

proclaim();
proclaim("ready?");
proclaim("ready!");

//

/**
 * Returns status of if ready or not
 *
 * @param status - The current status
 * @param repeat - how often to repeat
 * @returns nothing
 *
 */

function proclaim2(status = "not ready...", repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim("ready?");
proclaim("ready!");

// inferring return type
function getRandomNumber() {
  return Math.random();
}

const myVar = getRandomNumber();

/**
 * Returns a fruit salad.
 *
 * @param fruit1 - The first parameter
 * @param fruit2 - The second parameter
 * @returns nothing
 *
 */

// void return type
function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad("banana", "pineapple");
