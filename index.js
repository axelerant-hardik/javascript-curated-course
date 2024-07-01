// Create a constructor function for blog post that is getting created in draft state.
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const blog = new BlogPost('Test title', 'Test body', 'Admin');
console.log(blog);
