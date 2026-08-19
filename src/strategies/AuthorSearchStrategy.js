import SearchStrategy from "./SearchStrategy.js";

/**
 * Matches on the "author" field (Books) or the "director" field (DVDs),
  * demonstrating that a single strategy can adapt to differently-shaped
   * concrete items without the caller needing to know the difference.
    */
    export default class AuthorSearchStrategy extends SearchStrategy {
    matches(item, query) {
    const creator = item.author ?? item.director ?? "";
    return creator.toLowerCase().includes(query.toLowerCase());
    }
    }
