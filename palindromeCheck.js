//my code
let a="level"
function reverse(str){
    let reverseString="";
    for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
    }
    if(a==reverseString){
    console.log("palindrome")
}
else{
    console.log("no palindrome")
}
    return reverseString===str.toLowerCase()

}
let final=reverse(a)
console.log(final)


// //jvl code
function isPalindrome(str){
    let reverse=''
    function Nested(){
        for(let i=str.length-1;i>=0;i--){
            reverse+=str[i]
        }
        return reverse
    }
  
    return Nested().toLowerCase()===str.toLowerCase()
}
console.log(isPalindrome('level'))

//chatgpt

// function isPalindrome(str){
//     let reverse = ''
//     function Nested(){
//         for(let i = str.length - 1; i >= 0; i--){
//             reverse += str[i]
//         }
//         console.log(reverse)
//         return reverse
//     }

//     return Nested().toLowerCase() === str.toLowerCase()
// }

// console.log(isPalindrome('Level'))     // true
// console.log(isPalindrome('levellll'))  // false

