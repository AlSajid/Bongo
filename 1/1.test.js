const isAnagrams = require("./1");

test("if two strings are an anagram", () => {
    expect(
        isAnagrams("Mother-in-law", "Hitler woman")
    ).toBe(true);

    expect(
        isAnagrams("Debit card", "Bad credit")
    ).toBe(true);

    expect(
        isAnagrams("Dormitory", "Dirty room")
    ).toBe(true);
});


// npm install --save-dev jest
// npm test