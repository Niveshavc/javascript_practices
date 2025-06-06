//empty array
//iterate str
//in side for loop if condition str=='('
//array.push()
//else if (char==')')
//return false
//stack.pop()
//length===0

function isBalance(str){
    let stack=[]
    for(char of str){
        if(char=="("){//first value ( ,2.next value (,3rd value ) go to else block 4.value( go to else block
            stack.push(char)//push stack and stack value=[(],[((]
        }
        else if(char==")"){
            if(stack.length==0){//stack.length=2 so go to next statement  , stack length==1 so go to next statement
                return false
            }
            stack.pop()//last value deleted[(] ,last value also deleted so length is zero
        }
    }
    return stack.length===0;//true
}
console.log(isBalance("(())e"))