function sorting(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i -1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } 
        }
    }   
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

sorting([30, 32, 24, 26, 19, 17, 81]);