function correct(string) {
    for (var i = 0; i < string.length; i++) {
        string = string.replace('5', 'S')
        string = string.replace('0', 'O')
        string = string.replace('1', 'I')
    }
    return string
}