function expandedForm(num) {
    num = String(num)
    let arrNum = []
    for (let i = 0; i < num.length; i++) {
        let b = String(num[i])
        for (let c = 0; c < num.length - i - 1; c++) {
            b = b.concat("0")
        }
        arrNum.push(b)
    }
    console.log(arrNum)
    let resultNum = arrNum[0]
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] != 0) {
            resultNum = resultNum + ` + ${arrNum[i]}`
        }
    }
    console.log(resultNum)
    return resultNum
}