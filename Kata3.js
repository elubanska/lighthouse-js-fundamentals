const numberOfVowels = function(data) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (vowels.indexOf(data[i]) != -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));