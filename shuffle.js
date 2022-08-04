// let arr = [4,3,5,7,8]
// function shuffle([]){
//     for (let i = 0; i< arr.length; i++){
//         arr[Math.floor(5 * Math.random() )]= arr[i];
//     }
//     for (let i = 0;  i< arr.length;i ++) {
//         console.log(arr[i])    
//     }
// }
function shuffle(){
    let arr = [];
    for(let i = 0; i < 6; i++){
        arr[i] = Math.floor(Math.random() * 11)
    }
    console.log(arr)
}