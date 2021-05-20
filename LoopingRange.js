function range(start, end, step){
    const list = [];
    for (let i = start; i < end +1; i = i + step){
        list.push(i);
    }
    return list;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));