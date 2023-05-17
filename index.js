function isPalindrome(word) {
  // Write your algorithm here
  let newString = ''
  let result = null
  for(let i = word.length-1; i >= 0 ; i--){
    newString += word[i]
  }
  console.log(newString)
  if(newString === word){
   return  true
  }else{
   return  false
  }
  
}
// isPalindrome('wsim')
/* 
  Add your pseudocode here

  create an empty string named newString

  loop on each letter in the word starting from the last letter 
  and push it to newString
  
  
  check if the newString and the wird are the same 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
