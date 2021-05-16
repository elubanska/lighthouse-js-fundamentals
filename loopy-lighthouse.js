for (let i = 100; i<=150; i++){
    if ((!(i % 3)) && (!(i % 4))){
        console.log("LoopyLighthouse")
    } else if (!(i % 4)){
        console.log("Lighthouse")
    } else if (!(i % 3)){
        console.log("Loopy")
    } else {
        console.log(i)
    }
   }