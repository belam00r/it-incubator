function shortcut(string) {
    let a = ['a', 'o', 'e', 'u', 'i']
    for (let i = 0; i < string.length; i++) {
        for (let b = 0; b < 6; b++) {
            string = string.replace(a[b], "")
        }

    }
    console.log(string)
    return string;
}