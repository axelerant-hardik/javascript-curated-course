// Create Stack functionality with peek, push and pop methods.
let _stack = new WeakMap();

class Stack {
    constructor() {
        _stack.set(this, []);
    }

    get count() {
        return _stack.get(this).length;
    }

    push(value) {
        _stack.get(this).push(value);
    }

    pop() {
        const items = _stack.get(this);
        if (items.length === 0) {
            throw new Error('Stack is empty');
        }

        return items.pop();
    }

    peek() {
        const items = _stack.get(this);
        if (items.length === 0) {
            throw new Error('Stack is empty');
        }

        return items[items.length - 1];
    }

}
