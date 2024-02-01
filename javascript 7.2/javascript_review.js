// EXERCISE NUMBER 1
// A. Make array contains 5 fruits
let fruits = ['apple', 'orange', 'melon', 'watermelon', 'pear']
console.log(fruits)

// B. Add one fruit
fruits.push('banana')
console.log(fruits)

// C. Edit one fruit
fruits[3] = 'gripe'
console.log(fruits)

// D.Remove last fruits
fruits.pop()
console.log(fruits)

// EXERCISE NUMBER 2
// A. Make Object about Me
let about_me = {
    'nama_depan' : 'Farras',
    'nama_belakang' : 'Timorremboko',
    'hobi' : ['gaming', 'playing badminton', 'watching movies'],
    'angka_favorit' : 5,
    'memakai_kacamata' : true,
}
console.log(about_me)

// B. Print nama_lengkap
console.log(about_me['nama_depan'] + " " + about_me['nama_belakang'])

// C. Change value of angka_favorit
about_me['angka_favorit'] = 8
console.log(about_me)

// D. Add one hobby (coding)
about_me['hobi'].push('coding')
console.log(about_me)

// E. Add one property
about_me['lulusan'] = 'Hacktiv8'
console.log(about_me)

// F. Print hobby one by one
about_me['hobi'].map((hobi)=>{console.log(hobi)})

// G. Print All key and value
console.log("Keys:", Object.keys(about_me));
console.log("Values:", Object.values(about_me));

// H. Print All key and value with format key : value
for (const key in about_me) {
    console.log(`${key} = ${about_me[key]}`);
}

// EXERCISE NUMBER 3
// Make a Function that print date now
function print_date_now(){
    console.log("Tanggal sekarang = ", new Date().toLocaleDateString());
}

print_date_now()

// EXERCISE NUMBER 4
// Make a function that get date now
function get_date_now(){
    return new Date().toLocaleDateString();
}

// print it
console.log("Tanggal sekarang = ", get_date_now())


// EXERCISE NUMBER 5
// Make function get number
// Define number is even or odd with format"ganjil" or "genap"
// Check data type, if invalid return "invalid data"
function check_even_odd(number) {
    return typeof number !== 'number' || isNaN(number) ? "Invalid Data" : number % 2 === 0 ? "genap" : "ganjil"
}

console.log(check_even_odd(2))
console.log(check_even_odd(3))
console.log(check_even_odd(20))
console.log(check_even_odd(21))
console.log(check_even_odd("halo"))

// EXERCISE NUMBER 6
// Make function compare 2 value
// if second_number > first_number == true
// if second_number < first_number == false
// if both is equal == -1

function compare_numbers(num1, num2) {
    return num1 === num2 ? -1 : num1 > num2 ? false : true
}

console.log(compare_numbers(5, 8))
console.log(compare_numbers(5, 3))
console.log(compare_numbers(4, 4))
console.log(compare_numbers(3, 3))
console.log(compare_numbers(17, 2))

// EXERCISE NUMBER 7
// Make function reverse string
function reverse_string(strings) {
    return strings.split('').reverse().join('');
}

console.log(reverse_string('Hello World!'))

// EXERCISE NUMBER 8
// Make function to sorting alphabet with built in function
function sort_alphabet(text) {
    return text.split('').sort().join('');
}

console.log(sort_alphabet('qwerty'))

// Make custom function to sorting alphabet
function custom_sort_alphabet(text) {
    let splitted_text = text.split('');

    for(let i = 0; i < splitted_text.length - 1; i++) {
        for (let j = 0; j < splitted_text.length - i -1; j++){
            if (splitted_text[j] > splitted_text[j + 1]) 
            {
                temp = splitted_text[j];
                splitted_text[j] = splitted_text[j + 1];
                splitted_text[j + 1] = temp;
            } 
        }
    } 
    return splitted_text.join('')
}
console.log(custom_sort_alphabet('qwerty'))

// EXERCISE NUMBER 9
// Find array is arithmetic or not
function is_arithmetic(arr) {
    if (arr.length < 2) {
        return true;
    }

    let first_diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== first_diff) {
            return false;
        }
    }

    return true;
}

console.log(is_arithmetic([2, 4, 6, 8])); 
console.log(is_arithmetic([2, 4, 6, 9])); 

// EXERCISE NUMBER 10
function has_distance_3AB(inputString) {
    for (let i = 0; i < inputString.length - 4; i++) {
        if (inputString[i] === 'a' && inputString[i + 4] === 'b') {
            return true;
        }
    }
    return false;
}

console.log(has_distance_3AB('lane borrowed'))
console.log(has_distance_3AB('i am sick'))
console.log(has_distance_3AB('you are boring'))

// EXERCISE NUMBER 11
function find_gcd(angka1, angka2) {
    let minAngka = Math.min(angka1, angka2)

    for (let i = minAngka; i >= 1; i--) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            return i
        }
    }

    return 1
}

console.log(`FPB dari ${12} dan ${16} adalah: ${find_gcd(12, 16)}`)

// EXERCISE NUMBER 12
// Find Is Prine
function is_prime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(is_prime(17))
console.log(is_prime(20))

// EXERCISE NUMBER 13
// List Prime Number
function list_prime(num1, num2) {
    let primes = [];

    for (let i = num1; i <= num2; i++) {
        if (is_prime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(`Bilangan prima di antara ${10} dan ${30}: ${list_prime(10, 30)}`)
console.log(`Bilangan prima di antara ${10} dan ${20}: ${list_prime(1, 5)}`)

// EXERCISE NUMBER 14
// Fetch Data from API with Callback
const fetch = require("node-fetch");
const apiUrl = 'https://api.github.com/users/FarrasT';

function fetch_data_from_api_callback(apiUrl, success_callback, error_callback) {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        success_callback(data);
    })
    .catch(error => {
        error_callback(error);
    });
}

function handle_success(data) {
  console.log('Data from API:', data);
}

function handle_error(error) {
  console.error('Error fetching data:', error);
}

fetch_data_from_api_callback(apiUrl, handle_success, handle_error);

// EXERCISE NUMBER 15
// Fetch Data from API with Promise

function fetch_data_from_api_promise(apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  fetch_data_from_api_promise(apiUrl)
    .then(data => {
      console.log('Data from API:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });

    // EXERCISE NUMBER 16
    // Promise Chaining
    function fetch_data(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            });
    }
    
    // Exercise Promise chaining API
    const api_url_chaining = 'https://jsonplaceholder.typicode.com/posts/1'
    
    fetch_data(api_url_chaining)
        .then(postData => {
            console.log('Post Data:', postData)
            return fetch_data(`https://jsonplaceholder.typicode.com/comments?postId=${postData.id}`)
        })
        .then(commentData => {
            console.log('Comment Data:', commentData);
        })
        .catch(error => {
            console.error('Error:', error)
        })