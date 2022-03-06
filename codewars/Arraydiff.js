function arrayDiff(a, b) {
    for (let k of b) {
        a = a.filter(elem => k != elem)

    }
    return a
}
console.log(arrayDiff([1, 2, 3], [1, 2]))