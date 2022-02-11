function DNAtoRNA(dna) {
    for (i = 0; i < dna.length; i++) {
        dna = dna.replace("T", "U")

    }
    return dna
}