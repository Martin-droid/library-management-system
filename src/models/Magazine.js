import LibraryItem from "./LibraryItem.js";

export default class Magazine extends LibraryItem {
constructor({ id, title, year, issueNumber, publisher }) {
super({ id, title, year });
this.issueNumber = issueNumber;
this.publisher = publisher;
}

describe() {
return `📰 "${this.title}" #${this.issueNumber} (${this.year}) — ${this.publisher}`;
}

getCategory() {
return "magazine";
}
}
