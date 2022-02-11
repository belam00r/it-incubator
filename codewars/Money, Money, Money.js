function calculateYears(principal, interest, tax, desired) {
    // your code
    for (let i = 0;; i++) {
        if (principal < desired) {
            principal = principal + (principal * interest) - tax * (principal * interest)
        } else return i
    }
}