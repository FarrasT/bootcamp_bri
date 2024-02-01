function find_the_most_appear_val(array) {
    let value_map = new Map();
    let most_appear_val;
    let freq = 0;

    for (let i = 0; i < array.length; i++){
        let is_find = value_map.has(array[i]);
        !is_find ? value_map.set(array[i], 1) : value_map.set(array[i], value_map.get(array[i])+1);
    }

    value_map.forEach(function(value, key) {
        if (value > freq) {
            freq = value
            most_appear_val = key
        }
    })
    
    console.log(most_appear_val + " " + freq)
}

function find_the_most_appear_val_v2(array) {
    let value_map = new Map();
    let most_appear_val;
    let freq = 0;

    array.map((value) => {
        let is_find = value_map.has(value);
        !is_find ? value_map.set(value, 1) : value_map.set(value, value_map.get(value)+1);
    })

    value_map.forEach(function(value, key) {
        if (value > freq) {
            freq = value
            most_appear_val = key
        }
    })
    
    console.log(most_appear_val + " " + freq)
}

find_the_most_appear_val_v2([1, 2, 2, "2", 3, 4 , 1]); // paling banyak 1, muncul 2 kali
find_the_most_appear_val_v2([1, 2, 2, 3, 4 , 2]); // paling banyak 2, muncul 3 kali
find_the_most_appear_val_v2([5, 5, 7, "a", "b", "a", "a", "a", 5, 7]) // paling banyak a, muncul 4 kali
find_the_most_appear_val([1, 1, 2, 2]); // paling banyak 1, muncul 2 kali
find_the_most_appear_val([1, 2, 1, 2]); // paling banyak 1, muncul 2 kali
find_the_most_appear_val([1, 2, 2, 1]); // paling banyak 1, muncul 2 kali