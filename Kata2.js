const conditionalSum = function(values, condition) {
    tempValEven = 0;
    tempValOdd = 0;
    for (i = 0; i < values.length; i++) {
        if (!(values[i] % 2)) {
            tempValEven = tempValEven + values[i];
            //console.log("value: ", values[i], " tempVal: ", tempValEven);
        } else {
            tempValOdd = tempValOdd + values[i];
            //console.log("value: ", values[i], " tempVal: ", tempValOdd);
        }

    }
    if (condition === "even") {
        return tempValEven;
    } else {
        return tempValOdd;
    }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"))