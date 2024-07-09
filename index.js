// Demonstrate polymorphism.
function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

// Select Element.
function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.pop(item);
    }

    this.render = function() {
        let selectHtml = '<select>';
        for (let value of this.items) {
            selectHtml += `<option>${value}</option>`;
        }
        selectHtml += '</select>';
        return selectHtml;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Image Element.
function HtmlImageElement(src = 'https://image') {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
