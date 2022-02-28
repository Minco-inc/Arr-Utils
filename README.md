# Arr Utils
The simple/lightweight prototype utility about array!

# Features
- Pick random elements from array with weights.
- Await each array with next() function.
- Clone array.
- Convert iterator to array.

# Installation
```js
const toArray = require("arrutils");

let arr = [1, 2, 3, 4, 5];

/* This will count from 0 to 5 by 1 seconds.
 */
arr.each((e, i, next) => {
    console.log(e);
    setTimeout(next, 1000);
});

/* This will pick random number from 0 to 5.
 * There's a double chance of getting 3.
 */
let picked = arr.pick([1, 1, 2, 1, 1]);

/* This will hallow clone the array.
 */
let arr1 = arr.clone();


function *gen() {
    let i = 100;
    while (i--) {
        yield i;
    }
}

let it = gen();
let array = toArray(it);
// array.each..
```
