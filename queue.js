class Node {
   constructor(value){
        this.value = value;
        this.next = null;
    }  
}


class Queue {
   constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
   }


   enqueue(value){
    let node = new Node(value);

    if (!this.first){
        this.first = node;
        this.last = node;
    }
    else {
        this.last.next = node;
        this.last = node;
    }

    this.size++;
   }


   dequeue(){
    if  (!this.first)throw new Error("Cannot dequeue from an empty queue")
        
    let temp = this.first;
    if (this.first == this.last){
        this.last = null;
    }
    this.first == this.first.next;
    this.size--;
    return temp.value;
   }


    peek(){
        return this.first.value;
   }

   isEmpty(){
    return this.size === 0;
   }

   }

   module.exports = Queue;


   






















