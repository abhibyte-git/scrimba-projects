const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ""
const passbtn = document.getElementById("pass-btn")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

function generatePassword(){
    for ( i = 0; i < 15; i++ ) {
        password += characters[Math.floor( Math.random() * characters.length )]
    }
}

passbtn.addEventListener("click", function(){
    generatePassword()
    password1.value = password
    password = ""
    generatePassword()
    password2.value = password
    password = ""
})