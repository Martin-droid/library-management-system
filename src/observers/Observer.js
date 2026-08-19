/**
 * Observer — abstract "interface" for the Observer pattern.
  * Concrete observers implement `update(event)`.
   */
   export default class Observer {
   update(event) {
   throw new Error(`${this.constructor.name} must implement update()`);
   }
   }
