function eventListener (event, callback){
    switch (event) {
        case "doorOpen":
            console.log("ujay opened the door")
            break;
        case "doorClose":
            console.log("ujay closed the door")
            break;
        default:
            break;        
    }
}

function samson(){
    return (x) => {console.log(x)}
}

eventListener("doorOpen", samson())
eventListener("doorOpen", function (e) {console.log(e)})
eventListener("doorOpen", (e) => {console.log(e)})