
/* 
1 Prompt character lenth message 8-128
2 confirm Do you want upper case? Lower case is default
3 confirm do you want numbers?
4 confirm do you want special characters?
5 generate password.
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var pLength
var pCase
var pNumbers
var pChar
var mArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var finalP = []
var output
// Write password to the #password input
function writePassword() {
  pLength = prompt("Enter password legth. (8-128 characters");
    if ((pLength >= 8) && (pLength <= 128)) {}
    else {alert("Please enter a valid number."); return}

  pCase = prompt("Do you want uppercase? Y/N");
    if (pCase == "Y") {mArray.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");}
    else if (pCase == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}
  
  pNumbers = prompt("Do you want numbers? Y/N");
    if (pNumbers == "Y") {mArray.push("1","2","3","4","5","6","7","8","9","0");}
    else if (pNumbers == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}

  pChar = prompt("Do you want special characters? Y/N");
    if (pChar == "Y") {mArray.push("!","@","#","$","%","^","&","*","(",")","-","=","+");}
    else if (pChar == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}

  console.log(mArray) /* Remember to remove this */

  
  for(var i=0;i<pLength;i=i+1) {
    var password = mArray[Math.floor(Math.random() * mArray.length)];
    finalP.push(password)

  }
  
  output = finalP.join("");
  console.log(output);
  alert(output);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
