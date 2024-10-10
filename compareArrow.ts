// Comparing the behavior of `this` in normal functions vs. arrow functions

console.log("=== Normal Function Example ===");

interface ObjectWithMethod {
  value: number;
  method: () => void;
}

const objWithNormalFunction: ObjectWithMethod = {
  value: 42,
  method: function () {
    setTimeout(function (this: any) {
      console.log("Normal Function this.value:", this.value); // `this` will refer to the global object (undefined in strict mode)
    }, 1000);
  },
};

objWithNormalFunction.method(); // This will log undefined for `this.value` in normal function

console.log("=== Arrow Function Example ===");

const objWithArrowFunction: ObjectWithMethod = {
  value: 42,
  method: function () {
    setTimeout(() => {
      console.log("Arrow Function this.value:", this.value); // `this` refers to objWithArrowFunction
    }, 1000);
  },
};

objWithArrowFunction.method(); // This will log 42 for `this.value` in arrow function
