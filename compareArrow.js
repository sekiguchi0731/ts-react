// Comparing the behavior of `this` in normal functions vs. arrow functions
console.log("=== Normal Function Example ===");
var objWithNormalFunction = {
    value: 42,
    method: function () {
        setTimeout(function () {
            console.log("Normal Function this.value:", this.value); // `this` will refer to the global object (undefined in strict mode)
        }, 1000);
    },
};
objWithNormalFunction.method(); // This will log undefined for `this.value` in normal function
console.log("=== Arrow Function Example ===");
var objWithArrowFunction = {
    value: 42,
    method: function () {
        var _this = this;
        setTimeout(function () {
            console.log("Arrow Function this.value:", _this.value); // `this` refers to objWithArrowFunction
        }, 1000);
    },
};
objWithArrowFunction.method(); // This will log 42 for `this.value` in arrow function
