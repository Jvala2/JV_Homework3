//Here I had an idea to make a bunch of different functions that would pass global variables
//back and forth to one another. This proved too difficult and inefficient, so I ended up
//defining a bunch of global variables here.
var generateBtn = document.querySelector("#generate");
var pLength
var pCase
var pNumbers
var pChar
var mArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//By default the array of passwords starts as the lowercase alphabet
var finalP = []
var output
// The function gives a prompt to the user.
function writePassword() {
  pLength = prompt("How many characters long do you want your password? Enter a number from 8 to 128.");
    if ((pLength >= 8) && (pLength <= 128)) {}
    else {alert("Please enter a valid number."); return}
  //Here it asks how long you want the password. If you enter anything not a number between 8-128, it terminates.
  //pLenght is set as your input

  pCase = prompt("Do you want random UPPERCASE letters? Y/N");
    if (pCase == "Y") {mArray.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");}
    else if (pCase == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}
  //If you select Y for uppercase, it pushes the entire upper case input into the mArray for passwords.

  pNumbers = prompt("Do you want random numbers? Y/N");
    if (pNumbers == "Y") {mArray.push("1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0");}
    else if (pNumbers == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}
  //Same as the Upper Case one, except for numbers. There are less numbers than letters I doubled the numbers to be pushed to the array.

  pChar = prompt("Do you want random special characters? Y/N");
    if (pChar == "Y") {mArray.push("!","@","#","$","%","^","&","*","(",")","-","=","+");}
    else if (pChar == "N") {}
    else {alert("Invalid response. Please enter Y or N. Remember, input is Case sensitive."); return}
  // and again for Special Characters.

  console.log(mArray) /* Remember to remove this */

  
  for(var i=0;i<pLength;i=i+1) {
    var password = mArray[Math.floor(Math.random() * mArray.length)];
    finalP.push(password)
    //Here this loops a random number generator that randomly picks from the array you pushed to and
    //pushes the output to a different array, which includes your password. I made a bit of a mistake
    //preemptively calling the variable "finalP" here, (for Final Password) then I realized there was one more step I needed.
  }
  
  output = finalP.join("");
  console.log(output);
  document.getElementById("password").value = output;
  //Finally, this part joins the finalP array into a seemless randomly generated password and outputs to the page.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
