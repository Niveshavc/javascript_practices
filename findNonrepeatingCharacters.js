function nonrepeat(str){
    let obj={} 
    for(char of str){   
        if(obj[char]){                                                          
            obj[char]+=1                                                           
        }                                                                              
        else{                                                                          
            obj[char]=1                        
        }
    }
    for(char of str){
        if(obj[char]==2){
            return char
        }
    }
}
console.log(nonrepeat("hello"))