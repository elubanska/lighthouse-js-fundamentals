function range(start, end, step){
    list = [];
    for (i = start; i <= end; i = i + step){
        list.push(i);
    }
    return list;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));