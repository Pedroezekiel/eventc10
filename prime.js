function prime_number(number){
    let value
    let count = 0;
    for (value = 1; value <= number; value++) {
        if(number % value == 0){
            count++
        }
    }
    if (count <= 2) {
        return true
    }
    else{
        return false
    }
}
console.log(prime_number(25))

function is_prime(number){
    for(let i = 2; i < number / 2; i++){
        if (number % i == 0) return false;
    }
    return true
}