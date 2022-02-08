function expandedForm(num) {
    let numLength = num.length
    let lastItem
    let midleItem
    let startItem
    if (num[numLength - 1] != 0) {
        lastItem = num[numLength - 1]
    }
    if (num[numLength - 2] != 0) {
        midleItem = num[numLength - 2] * 10
    }
    if (num[numLength - 3] != 0) {
        startItem = num[numLength - 3] * 100
    }
    let expandedForm = `${startItem} \+ ${midleItem} \+ ${lastItem}`
    console.log(expandedForm)
    return expandedForm
}
expandedForm(11)