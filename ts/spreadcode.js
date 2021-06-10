var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var clonedArray = __spreadArray([], ar1); //cloned array
var result = __spreadArray(__spreadArray(__spreadArray([], ar1), ar2), [7, 9]);
console.log(result);
