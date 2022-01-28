const reverseSeq = n => {
    var k = n - 1;
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr[k] = i;
        k--
    }
    console.log(arr)
    return arr;
};