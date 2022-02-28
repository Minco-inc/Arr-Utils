/* Pick random element from the array.
 * @param {weight: Array<Number>}
Array.prototype.pick = function(weight) {
    if (weight) {
        if (weight.length != this.length) throw new Error('Weight array length must be equal to array length.');
        let arr = [];
        this.forEach((v, i) => {
            let cw = weight[i];
            let ca = new Array(cw).fill(v);
            arr = arr.concat(ca);
        });
        return arr.pick();
    } else {
        return this[Math.floor(Math.random() * this.length)];
    }
};

/* Shallow clone the array.
*/
Array.prototype.clone = function() {
    return this.slice(0);
};

/* Each the array.
 * @param {function(element: any, index: Number, next: function(void) -> void)} callback
 * @return {Promise<void>}
 */
Array.prototype.each = function(fn) {
    return new Promise(async (resolve, reject) => {
        // fn(v, i, next)
        let i = 0;
        let that = this;
        let next = () => {
            if (i < that.length) {
                fn(that[i], i++, next);
            } else {
                resolve();
            }
        };
        next();
    });
};

/* Convert any iterable to array.
 * @param {any} iterable
 * @return {Array<any>}
 */
module.exports = function toArray(iterator) {
    switch (typeof iterator) {
        case "string": {
            return [...iterator];
        }
        default: {
            let arr = [];
            for (let v of iterator) {
                arr.push(v);
            }
            return arr;
        }
    }
};
