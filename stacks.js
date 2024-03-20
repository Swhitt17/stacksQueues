class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(){
        let node = new Node(value);

        if (!this.first){
            this.first = node;
            this.last = node;
        }
        else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
    
        this.size++;
    }


    pop(){
    if  (!this.first)throw new Error("Cannot pop from an empty stack")
        
    let temp = this.first;
    if (this.first == this.last){
        this.last = null;
    }
    this.first == this.first.next;
    this.size--;
    return temp.value;

    }

    peek(){
        return this.first.value

    }

    isEmpty(){
      return  this.size === 0;
    }

}

module.exports = Stack;