function validateMessage(msg) {
    if (msg === null) {
        throw new ReferenceError('Message is null!')
    }
    if (typeof msg !== "string") {
        throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`)

    }
    if (msg.length > 255 || msg.length == 0) {
        throw new RangeError(`Message contains ${msg.length} characters!`)

    }

    for (let n = 0; n < msg.length; n++) {
        console.log(msg[n])
        if (msg[n] == '<') {
            for (let i = 0; i < msg.length; i++) {
                if (msg[i] == ">") {
                    return false
                }
            }
        }
    }
    return true
}