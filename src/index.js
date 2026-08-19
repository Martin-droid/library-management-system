import LibraryItemFactory from "./factories/LibraryItemFactory.js";
import ItemRepository from "./repositories/ItemRepository.js";
import MemberRepository from "./repositories/MemberRepository.js";
import NotificationService from "./observers/NotificationService.js";
import ConsoleMemberNotifier from "./observers/ConsoleMemberNotifier.js";
import LibraryService from "./services/LibraryService.js";
import TitleSearchStrategy from "./strategies/TitleSearchStrategy.js";
import AuthorSearchStrategy from "./strategies/AuthorSearchStrategy.js";
import Member from "./models/Member.js";

// --- Composition root -------------------------------------------------
// This is the one place that knows about concrete classes; everything
// downstream (LibraryService) only sees abstractions/injected
// dependencies. This is Dependency Injection in practice.
const itemRepository = new ItemRepository();
const memberRepository = new MemberRepository();
const notificationService = new NotificationService();
notificationService.subscribe(new ConsoleMemberNotifier());

const library = new LibraryService({
  itemRepository,
  memberRepository,
  notificationService,
});

// --- Seed some data using the Factory pattern --------------------------
const book = LibraryItemFactory.create("book", {
  title: "Clean Code",
  year: 2008,
  author: "Robert C. Martin",
  isbn: "978-0132350884",
});

const dvd = LibraryItemFactory.create("dvd", {
  title: "The Imitation Game",
  year: 2014,
  director: "Morten Tyldum",
  runtimeMinutes: 114,
});

const magazine = LibraryItemFactory.create("magazine", {
  title: "National Geographic",
  year: 2024,
  issueNumber: 245,
  publisher: "NatGeo Partners",
});

[book, dvd, magazine].forEach((item) => library.addItem(item));

const member = library.registerMember(
  new Member({ id: "m-1", name: "Martin Ndegwa", email: "martin@example.com" })
  );

// --- Demonstrate the Strategy pattern -----------------------------------
console.log("\n--- Search by title: 'clean' ---");
library.search(new TitleSearchStrategy(), "clean").forEach((item) => console.log(item.describe()));

console.log("\n--- Search by author/director: 'tyldum' ---");
library.search(new AuthorSearchStrategy(), "tyldum").forEach((item) => console.log(item.describe()));

// --- Demonstrate checkout/return + the Observer pattern -----------------
console.log("\n--- Checking out & returning an item ---");
library.checkOut(book.id, member.id);
library.returnItem(book.id, member.id);

console.log("\n--- Items currently available ---");
library.listAvailable().forEach((item) => console.log(item.describe()));
