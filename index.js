// Demonstrate prototypical inheritance.
function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.pop(item);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
