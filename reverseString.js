//my code
let a="Nivesh"
let b=""

for(let i=a.length-1;i>=0;i--){
    b+=a[i]
    
}
console.log(b)

//jvl code

let jvl="hello"

function reverse(str){
    let reverseString="";
    for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
    }
    return reverseString
}

let final=reverse(jvl)
console.log(final)