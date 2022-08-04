function reverse(num) {
    let save = "";
    let str = num.toString();
    for(let i = str.length -1; i >= 0; i--){
        save += str[i]
    }
    console.log(save.valueOf())
}
reverse(1233)
