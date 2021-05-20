function loopyLighthouse(range, multiples, words){
    for (let i = range[0]; i <= range[1]; i++){
//        console.log(range[0]);
//        console.log(range[1]);
        if ((!(i % multiples[0])) && (!(i % multiples[1]))){
            console.log(words[0]+words[1])
        } else if (!(i % multiples[1])){
            console.log(words[1])
        } else if (!(i % multiples[0])){
            console.log(words[0])
        } else {
            console.log(i)
        }
    }
}
console.log(loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]));
//console.log(range);