import SearchStrategy from "./SearchStrategy.js";

export default class TitleSearchStrategy extends SearchStrategy {
matches(item, query) {
return item.title.toLowerCase().includes(query.toLowerCase());
}
}
