/**
 * NotificationService — the "Subject" in the Observer pattern.
  *
   * The library service publishes events here (checkout, return, overdue, ...)
    * without knowing or caring who is listening. Observers subscribe
     * independently, so new notification channels (email, SMS, console log,
      * audit trail) can be added without touching LibraryService.
       */
       export default class NotificationService {
       #observers = [];

       subscribe(observer) {
       this.#observers.push(observer);
       }

       unsubscribe(observer) {
       this.#observers = this.#observers.filter((o) => o !== observer);
       }

       notify(event) {
       for (const observer of this.#observers) {
       observer.update(event);
       }
       }
       }
