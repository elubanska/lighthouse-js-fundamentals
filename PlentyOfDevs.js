function ageCalculator(name, yearOfBirth, currentYear){
    const age = currentYear - yearOfBirth;
    const text = name + " is " + age + " years old.";
    return text;
}
console.log(ageCalculator("Miranda", 1983, 2015));