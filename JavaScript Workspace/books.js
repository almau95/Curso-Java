let books = [{ title: "Speaking JavaScript", author: "Axel Rauschmayer", pages: 460 }, 
{ title: "Programming JavaScript Applications", author: "Eric Elliot", pages: 254 }, 
{ title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352 } ];


let newBook = { title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254 };

books.push(newBook); 

console.log(books.length); 
console.log(books[0].title); 
console.log(books[1].title); 
console.log(books[2].title); 
console.log(books[3].title);

books.shift();

console.log(books.length);
console.log(books[0].title); 
console.log(books[1].title); 
console.log(books[2].title);

let sum = books[0].pages + books[1].pages + books[2].pages; 
console.log(`pages: ${sum}`);