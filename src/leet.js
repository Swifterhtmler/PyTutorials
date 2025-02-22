
// const fn = (acc, curr) => acc + curr;

// var reduce = function(nums, fn, init) {
//     let acc = init;
//     for (let i = 0; i < nums.length; i++) {
//         acc = fn(acc, nums[i]);
//     }
//     return acc;
// };


// console.log(reduce([1,2,3,4,5], fn, 0));



// var argumentsLength = function(...args) {
//     let count = 0
//     for (let i = 0; i < args.lenght; i++) {
//        count++
//     }
//     return count
// };

// console.log(argumentsLength(1,2,3,4,5,6,7,8,9,10));



function argumentsLength(...args) {
    let count = 0
for (let i = 0; i < args.length; i++) {
    count++
}
return count
};

console.log(argumentsLength(1,2,3,4,5,6,7,8,9,10));

