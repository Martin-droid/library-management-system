import LibraryItem from "./LibraryItem.js";

export default class Book extends LibraryItem {
constructor({ id, title, year, author, isbn }) {
super({ id, title, year });
this.author = author;
this.isbn = isbn;
}

describe() {
return `📖 "${this.title}" (${this.year}) by ${this.author} [ISBN: ${this.isbn}]`;
}

getCategory() {
return "book";
}
}
