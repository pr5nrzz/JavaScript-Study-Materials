console.log(10 < 20 && 30 > 15 && 25 < 30);
console.log(10 > 20 || 15 < 30);

const a = 10 > 20 && 20;
const b = 15 < 30 && 20 > 10 && 30;

console.log(a);
console.log(b);

const posts = ["Post One", "Post Two"];
posts.length > 0 && console.log(posts[0]);

let c;

c = 10 || 20;
c = 0 || 15;
c = 0 || null || '' || undefined;

console.log(c);

let d;

d = 10 ?? 20;
d = null ?? 10;
d = undefined ?? 10;
d = 0 ?? 10;
d = '' ?? 10;

console.log(d);