/**
 * ItemRepository — a simple in-memory repository behind a small,
 * reusable interface (add/find/list/remove). Swapping this for a
 * database-backed repository later would not require any changes
 * to LibraryService, since it depends only on this contract.
 */
export default class ItemRepository {
  #items = new Map();

  add(item) {
    this.#items.set(item.id, item);
    return item;
    }

  findById(id) {
    return this.#items.get(id) ?? null;
    }

  list() {
    return Array.from(this.#items.values());
                      }

                      remove(id) {
                        return this.#items.delete(id);
                        }
                      }
