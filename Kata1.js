const sumLargestNumbers = function(data) {
    if (data.length < 2) {
        return data[0];
    } else {
        data.sort((a, b) => b - a);
        //console.log(data);
        const sumData = data[0] + data[1]
        return sumData;
    }
};

console.log(sumLargestNumbers([3]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));