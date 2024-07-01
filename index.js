// Create a blog post object that has the properties
// title, body, author, views(number), comments (author, body), isLive(boolean).
const blogPost = {
    title: 'Test title',
    body: 'Test body',
    author: 'Test author',
    views: 10,
    comments: [
        {
            author: 'Admin',
            body: 'Test comment body',
        },
        {
            author: 'Hardik',
            body: 'Comment here',
        },
    ],
    isLive: false,
};

console.log(blogPost);
