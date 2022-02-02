// Setup
function phoneticLookup(val) {

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    let result = lookup[val];

    return result;
}

phoneticLookup("charlie");