function challenge2(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
}
let array = [1, 2, 3, 4, 5];
console.log(challenge2(array));
