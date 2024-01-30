function reverse(text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--){
        result += text[i];
    }
    console.log(text == result ? "palindrome" : result)
}

reverse("malam");