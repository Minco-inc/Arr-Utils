require("./arrpick")

let arr = [1, 2, 3, 4, 5];

(async () => {
    console.log("ArrUtils demo.");

    console.log();
    console.log(`arr =`, arr);

    console.log();
    console.log("1. Array.prototype.each");
    console.log("   Each element in the array. But the callback will wait until next() called.");
    console.log("   The function will return a promise that will be resolved when all elements are processed.");
    console.log("   The demo will each element in the array and print it and wait 100ms.");
    await arr.each((v, i, next) => {
        console.log(`    arr[${i}] = ${v}`);
        setTimeout(next, 100);
    });

    console.log();
    console.log("2. Array.prototype.pick");
    console.log("   Pick a random element from the array. You can set probability of items.");
    console.log("   Weight of the demo: [ 1, 1, 5, 1, 1 ]");
    let pock = arr.pick([1, 1, 5, 1, 1]);
    console.log(`    pick = ${pock}`);

    console.log();
    console.log("3. Array.prototype.clone");
    console.log("   Clone the array.");
    console.log("   Swallow copy of the array.");
    let arr2 = arr.clone();
    console.log(`    arr2 = ${arr2}`);
})();
