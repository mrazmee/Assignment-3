function arrSum(arr) {
    let start = 0;
    let currentSum = arr[0];
    let maxSum = arr[0];
    let indexAwal = 0;
    let end = 0;

    for(let i = 1; i < arr.length; i++){
        if(currentSum < 0){
            currentSum = arr[i];
            indexAwal = i;
        }else{
            currentSum+=arr[i];
        }

        if(currentSum > maxSum){
            maxSum = currentSum;
            start = indexAwal;
            end = i
        }
    }

    const subArray = arr.slice(start, end+1);
    const hasilAkhir = [subArray, maxSum];
    console.log(hasilAkhir)
}


arrSum([-2, -3, 4, -1, -2, 1, 5, -3]); // Output: [[ 4, -1, -2, 1, 5 ], 7]
arrSum([-2,-9,-5,4,3,10,-2,-3,-4]);


