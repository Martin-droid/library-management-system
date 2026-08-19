/**
 * SearchStrategy — abstract "interface" for the Strategy pattern.
  *
   * Concrete strategies (search by title, by author, by category, ...)
    * implement `matches(item, query)`. The LibraryService is configured
     * with whichever strategy it needs at call time, so new search
      * behaviors can be added without modifying the service itself.
       */
       export default class SearchStrategy {
       /**
        * @param {import("../models/LibraryItem.js").default} item
         * @param {string} query
          * @returns {boolean}
           */
           matches(item, query) {
           throw new Error(`${this.constructor.name} must implement matches()`);
           }
           }
