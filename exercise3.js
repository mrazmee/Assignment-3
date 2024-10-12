function sumArray(arr, int){
    let arrHasil = [];
    for(let i = 0; i < arr.length - 1;i++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i] + arr[j]) === int){
                arrHasil.push([arr[i], arr[j]]);
            }
        }
    }
    
    return console.log(arrHasil);
}

sumArray([2,1,4,3], 5)
sumArray([1,8,10,3], 11)