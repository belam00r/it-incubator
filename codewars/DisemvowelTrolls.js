function disemvowel(str) {
    for (let i = 0; i < str.lenght; i++) {
        str = str.replace(str[3], "")
        console.log(str)
    }
    return str;
}
disemvowel("sidesidesidesidesideside")