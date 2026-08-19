import Book from "../models/Book.js";
import DVD from "../models/DVD.js";
import Magazine from "../models/Magazine.js";
import { generateId } from "../utils/idGenerator.js";

/**
 * Factory Method pattern.
  *
   * Centralizes creation of concrete LibraryItem subclasses so callers
    * never need to know (or import) the concrete classes directly — they
     * just describe what they want via a `type` string and a data payload.
      * Adding a new item type only requires a new case here, not changes
       * throughout the codebase.
        */
        export default class LibraryItemFactory {
        static create(type, data) {
        const id = data.id ?? generateId(type);

        switch (type) {
        case "book":
        return new Book({ id, ...data });
        case "dvd":
        return new DVD({ id, ...data });
        case "magazine":
        return new Magazine({ id, ...data });
        default:
        throw new Error(`Unknown library item type: "${type}"`);
        }
        }
        }
