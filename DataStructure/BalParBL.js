var size=100;

    class stack {
    constructor() {
        this.a = [];
        this.top=-1;

    }
    isEmpty() {
        if (this.top == -1) {
            return true;
        }
        else{
            return false;
        }
    }
    isFull() {
        if (this.a.length-1 == this.top) {
            return true;
        }
        else{
            return false;
        }
    }
    push(element) {
       this.top++;
          return this.a.push(element);
    }
    pop() {
        
        if (!this.isEmpty()) {
            this.top--;
          return this.a.pop();
        
        }
        else {
            console.log("underflow");
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.a[this.a.length - 1];
            
        }
        else{
            console.log("is empty");
        }
    }
   
}
   module.exports={
        isBalanced:(expression)=>{
            const s=new stack();
            
        for(let i=0;i<expression.length;i++){
            if(expression[i]==='('){
                s.push(expression[i]);
                console.log(s);

            }
            else if(expression[i]===')'){
             
             if(s.peek()==='('){
                 s.pop();
             }        
            }
        }
            if(s.isEmpty()){
                return true;
            }
            else{
                return false;
            }

        }
    }

