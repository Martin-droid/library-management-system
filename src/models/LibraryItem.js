/**
 * LibraryItem — abstract base "interface".
  *
   * JavaScript has no native interfaces, so we emulate one: a base class
    * whose contract methods throw unless overridden by a subclass. Any
     * concrete item (Book, DVD, Magazine, ...) must implement `describe()`
      * and `getCategory()`.
       */
       export default class LibraryItem {
       constructo
       if (new.target === LibraryItem) {
       throw new TypeError("LibraryItem is abstract and cannot be instantiated directly.");
       }
       this.id = id;
       this.title = title;
       this.year = year;
       this.isCheckedOut = false;
       }

       /** @returns {string} a human-readable description of the item */
       describe() {
       throw new Error(`${this.constructor.name} must implement describe()`);
       }

       /** @returns {string} the category/type of item, e.g. "book", "dvd" */
       getCategory() {
       throw new Error(`${this.constructor.name} must implement getCategory()`);
       }

       checkOut() {
       if (this.isCheckedOut) {
       throw new Error(`"${this.title}" is already checked out.`);
       }
       this.isCheckedOut = true;
       }

       returnItem() {
       if (!this.isCheckedOut) {
       throw new Error(`"${this.title}" was not checked out.`);
       }
       this.isCheckedOut = false;
       }
       }
