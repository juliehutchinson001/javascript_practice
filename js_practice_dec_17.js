' In DNA strings, symbols "A" and "T" are complements ' +
' of each other, as "C" and "G". You have function with ' +
' one side of the DNA (string, except for Haskell); ' +
' you need to get the other complementary side. DNA strand ' +
' is never empty or there is no DNA at all (again, except ' +
' for Haskell).' +

' DNAStrand ("ATTGC") # return "TAACG"' +
' DNAStrand ("GTAT") # return "CATA" '



function DNAStrand(dna) {
    compSide = '';
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                compSide += 'T';
                break;
            case 'T':
                compSide += 'A';
                break;
            case 'C':
                compSide += 'G';
                break;
            case 'G':
                compSide += 'C';
                break;
        }
    }
    return compSide;


    DNAStrand('ATTGC')
}