function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);