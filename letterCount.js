//my code
function check(str){
    let obj={}
    for(char of str){
        if(obj[char]){
        obj[char]++
    }
    else{
        obj[char]=1
    }
}
return obj
}
console.log(check("hello"))