import Observer from "./Observer.js";

/**
 * A concrete observer that logs member-facing notifications to the
  * console. In a real system this might send an email or push
   * notification instead — LibraryService would not need to change.
    */
    export default class ConsoleMemberNotifier extends Observer {
    update(event) {
    switch (event.type) {
    case "checked-out":
    console.log(`🔔 Notice: "${event.item.title}" was checked out by ${event.member.name}.`);
    break;
    case "returned":
    console.log(`🔔 Notice: "${event.item.title}" was returned by ${event.member.name}. Thank you!`);
    break;
    default:
    console.log(`🔔 Notice: ${JSON.stringify(event)}`);
    }
    }
    }
