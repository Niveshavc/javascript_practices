
function longest(str){
    let store= str.split(' ')
    let longe=""
    
    for(stores of store){
        if(stores.length>longe.length){
            longe=stores
        }
    }
    return longe
}
console.log(longest('My name is nivesh niveshramesh'))