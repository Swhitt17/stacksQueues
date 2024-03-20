const Queue = require('./queue');

let queue;

beforeEach(function(){
    queue = new Queue();
})

describe("enqueue",function (){  
 test('should add value to end',function (){
    expect(queue.enqueue(12)).toBe(undefined)
    expect(queue.first.value).toBe(12);
    expect(queue.last.value).toBe(12);
    queue.enqueue(24);
    expect(queue.first.value).toBe(12);
    expect(queue.last.value).toBe(24);
    queue.enqueue(36);
    expect(queue.first.value).toBe(12);
    expect(queue.last.value).toBe(36);
 });
});


describe("dequeue", function(){
    test("should remove value from the front", function(){
        queue.enqueue(12);
        queue.enqueue(24);
        queue.enqueue(36);
        let removed = queue.dequeue;
        expect(removed).toBe(12);
        expect(queue.size).toBe(2);
        expect(removed).toBe(24);
        expect(queue.size).toBe(1);
        expect(removed).toBe(36);
        expect(queue.size).toBe(0);
    });

    test("should throw error if queue is empty",function(){
        expect(() => queue.dequeue().toThrow(Error));
    });
 
});


describe("peek", function(){
    test("should return first value", function(){
        queue.enqueue(8);
        expect(queue.peek).toBe(8)
        queue.enqueue(2);
        expect(queue.peek).toBe(8)
    })
})

describe("isEmpty", function(){
    test("should return true for empty queues", function(){
        expect(queue.isEmpty).toBe(true)
    });

    test("should return false for non-empty queues", function(){
        queue.enqueue(7);
        queue.enqueue(54);
        queue.enqueue(85);
        expect(queue.isEmpty).toBe(false)
    });

});