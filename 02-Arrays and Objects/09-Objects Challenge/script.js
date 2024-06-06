const library = [
    {
        title: "Book1",
        author: "Author1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Book2",
        author: "Author2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Book3",
        author: "Author3",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const jsonString = JSON.stringify(library);

console.log(library, jsonString);