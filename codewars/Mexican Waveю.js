function wave(str) {
    let strArray = [];
    let result = [];
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i])
    }
    for (let k = 0; k < strArray.length; k++) {
        if (strArray[k] != " ") {
            if (k - 1 >= 0) {
                strArray[k - 1] = strArray[k - 1].toLowerCase()
                console.log("Сделал в нижний предыдущий")
            }
            strArray[k] = strArray[k].toUpperCase()
            console.log("в верхний первый")
            if (k + 1 < str.length) {
                strArray[k + 1] = strArray[k + 1].toLowerCase()
                console.log("в нижний второй")
            }
            let newStr = ""
            for (let y = 0; y < strArray.length; y++) {
                newStr = newStr + strArray[y]
            }
            console.log("пробую запулить newStr в result")
            result.push(newStr)
        } else {
            console.log("пропустил пробел или в нижний предыдущий")
            if (k - 1 >= 0) {
                strArray[k - 1] = strArray[k - 1].toLowerCase()
                console.log("Сделал в нижний предыдущий")
            }

        }
    }
    return result
}