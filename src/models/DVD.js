import LibraryItem from "./LibraryItem.js";

export default class DVD extends LibraryItem {
constructor({ id, title, year, director, runtimeMinutes }) {
super({ id, title, year });
this.director = director;
this.runtimeMinutes = runtimeMinutes;
}

describe() {
return `📀 "${this.title}" (${this.year}) directed by ${this.director} [${this.runtimeMinutes} min]`;
}

getCategory() {
return "dvd";
}
}
