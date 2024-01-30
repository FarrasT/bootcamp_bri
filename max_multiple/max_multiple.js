function max_multiple(arr) {
    if (arr.length < 3) {
        console.log("error")
        return
    }
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i -1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            if (arr[j] == arr[j + 1]) {
                arr = arr
            } 
        }
    }   

    arr = [...new Set(arr)];

    if (arr.length == 1){
        console.log(arr[0]);
    } else if (arr.length == 2) {
        console.log(arr[0] * arr[1])
    } else {
        let value = arr[arr.length - 1];
        for (let i = arr.length - 2; i > arr.length - 4; i--) {
            value *= arr[i]
        }
        console.log(value)
    }
}

max_multiple([2, 3, 10, 20, 3, 4, 5, 6]);
max_multiple([2, 2, 2, 2]);
max_multiple([1, 1, 1, 1]);
max_multiple([1, 1, 1, 3]);
max_multiple([2, 1, 1, 3]);