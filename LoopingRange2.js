function range(start, end, step){
    let list = [];
    let temp = 0; 
    for (let i = start; i < end +1; i = i + step){
        temp = i;
        list.push(temp);
        //console.log("i: "+ i)
    }
    return list;
}
console.log(range(0, 10, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));