const post = {
    id: 1,
    title: "Post1",
    body: "This is the body"
};

// Convert to JSON string
const jsonStr = JSON.stringify(post);

// Parse JSON string
const jsonObj = JSON.parse(jsonStr);

const posts = [
    {
        id: 1,
        title: "Post1",
        body: "This is the body"
    },
    {
        id: 2,
        title: "Post2",
        body: "This is the body"
    }
];

console.log(JSON.stringify(posts));