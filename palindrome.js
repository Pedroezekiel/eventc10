function palindrome(input){
    let saving = "";
    for(let i = input.length-1; i >= 0; i--){
        saving += input[i]
    }if (saving === input){
        console.log(input + " " + saving + " is a plindrome")
    }else{
        console.log(input + " " + saving + " is not a palindrome ")
    }
}

palindrome("12341")

function pal(input){
    for (let i = 0; i < input.length; i++){
        if (input[i] != input[input.length - (i + 1)]){
            return false
        }
    }
}