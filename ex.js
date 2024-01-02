//Ex. 1.1
const validator = require('validator')
const {faker} = require('@faker-js/faker')

let email = "shoobert@dylan"
console.log(validator.isEmail(email))

//Ex. 1.2
let phoneNumber = "786-329-9958";
console.log(validator.isMobilePhone(phoneNumber,'en-US'))

//Ex. 1.3
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text,blacklist))

//Ex. 2.1
let makeHuman = function(number){
    for(let i=0;i<number;i++){
        let name = faker.internet.userName()
        let imageUrl = faker.image.avatar()
        let companyName = faker.company.buzzAdjective()
        console.log("name: "+name+" imageURL: "+imageUrl+" company name: "+companyName);
    }
}

makeHuman(2)