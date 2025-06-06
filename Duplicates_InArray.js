//1st method
function duplicate(arr){
    // using Set  Constructor Do this
    let arrays=new Set(arr)
    //we use spread operator because we convert set into array...?
    return [...arrays]
}
Duplicate_value=[1,2,3,44,5,1,1,2,34,1]
console.log(duplicate(Duplicate_value))



//2nd method
let arrays=[1,1,1,2,3,4,2,3,4,5]
function duplicateUsingFilter(str){
    let dup=str.filter((element,index,totalA)=>{
        //we use filter method and get the index using index of and compare to filter method index indexOf==index
       return totalA.indexOf(element)==index
    })
    return dup
}
console.log(duplicateUsingFilter(arrays))




//3rd method 
let arrayes=[1,2,34,5,6,1,2]
function duplicate(str){
    return str.reduce((a,e)=>{
        return a.includes(e)?a:[...a,e]
    },[])
}
console.log(duplicate(arrayes))