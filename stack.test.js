const Stack = require('./stack');

let stack;

beforeEach(function(){
    stack = new Stack();
})


describe("push",function(){
    test("should add value to the top", function{
        expect(stack.push(15)).toBe(undefined)
        expect(stack.first.value).toBe(15);
        expect(stack.last.value).toBe(15);
        stack.push(30);
        expect(stack.first.value).toBe(30);
        expect(stack.last.value).toBe(15);
        stack.push(45);
        expect(stack.first.value).toBe(45);
        expect(stack.last.value).toBe(15);
    });
});

describe("pop", function(){
    test("should remove value from the top", function(){
        stack.push(15);
        stack.push(30);
        stack.push(45);
        let removed = stack.pop;
        expect(removed).toBe(45);
        expect(stack.size).toBe(2);
        expect(removed).toBe(30);
        expect(stack.size).toBe(1);
        expect(removed).toBe(15);
        expect(stack.size).toBe(0);
    })
    test("should throw error if stack is empty",function(){
        expect(() => stack.pop().toThrow(Error));
    });
})

describe("peek", function(){
    test("should return the top value", function(){
        stack.push(5);
        expect(queue.peek).toBe(5)
        stack.push(15);
        expect(queue.peek).toBe(19);
    })
})

describe("isEmpty", function(){
    test("should return true for empty stacks", function(){
        expect(isEmpty).toBe(true)
    })

    test("should return false for non-empty stacks", function(){
        stack.push(25);
        stack.push(62);
        stack.push(86);
        expect(stack.isEmpty).toBe(false)
    });
})
