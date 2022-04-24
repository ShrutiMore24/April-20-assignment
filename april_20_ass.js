function onefun(arr) {
    let y = []
    for (let i = 0; i < arr.length; i++) {
        const answer = (arr[i] / 2)
        y.push(answer)

    }
    return y
}

const x = [11, 21, 31, 41, 51]
const y = [1, 2, 3, 4, 5]
const z = [8, 7, 6, 5, 3]
console.log(onefun(x));
console.log(onefun(y));
console.log(onefun(z));