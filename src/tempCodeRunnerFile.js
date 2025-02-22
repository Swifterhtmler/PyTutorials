

function argumentsLength(...args) {
    let count = 0
for (let i = 0; i < args.length; i++) {
    count++
}
return count
};

console.log(argumentsLength(1,2,3,4,5,6,7,8,9,10));

