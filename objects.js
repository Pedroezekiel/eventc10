let userInput = {
    firstName: "jonathan",
    lastName: "keys",
    getFullName: function(){
        return this.firstName + " " + this.lastName
    },
    createUsername: function(){
        console.log("@" + this.firstName.charAt(0) + this.lastName.charAt(this.lastName.length-1))
    }
}

