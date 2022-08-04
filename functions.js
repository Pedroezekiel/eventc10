// function onboardcallStudent(studentObj, emailStudent){
//     if(studentObj?.firstName !== ""){
//         console.log(`Welcome to Semicolon ${studentObj.firstName}`)
//         setTimeout(()=>emailStudent(studentObj), 3000)
//         console.log(`${studentObj.firstName}, check yor email in the next 1 min for further instructions`)
//     }else{
//         return
//     }
// }

let human = {
    firstName: "ezekiel",
    nickName: "lastboen"
}


function emailMe(person){
    console.log("hi")
}
emailMe(human)