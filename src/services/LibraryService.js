import { assertRequiredFields } from "../utils/validators.js";

/**
 * LibraryService — the core orchestrator, wired together with
  * Dependency Injection.
   *
    * It depends only on abstractions passed into its constructor
     * (an item repository, a member repository, and a notification
      * service), never on concrete implementations it constructs itself.
       * That makes it easy to test in isolation (inject fakes/mocks) and
        * easy to swap real implementations (e.g. a database-backed
         * repository) without touching this class.
          */
          export default class LibraryService {
          #itemRepository;
          #memberRepository;
          #notificationService;

          constructo
          assertRequiredFields(
          { itemRepository, memberRepository, notificationService },
          ["itemRepository", "memberRepository", "notificationService"]
          );
          this.#itemRepository = itemRepository;
          this.#memberRepository = memberRepository;
          this.#notificationService = notificationService;
          }

          addItem(item) {
          return this.#itemRepository.add(item);
          }

          registerMember(member) {
          return this.#memberRepository.add(member);
          }

          /**
           * Search using any injected SearchStrategy (Strategy pattern) —
            * the caller decides at call time whether to search by title,
             * author, or any future strategy, without LibraryService needing
              * to know the difference.
               */
               search(strategy, query) {
               return this.#itemRepository.list().filter((item) => strategy.matches(item, query));
               }

               checkOut(itemId, memberId) {
               const item = this.#itemRepository.findById(itemId);
               if (!item) throw new Error(`No item found with id "${itemId}"`);

               const member = this.#memberRepository.findById(memberId);
               if (!member) throw new Error(`No member found with id "${memberId}"`);

               item.checkOut();
               member.checkedOutItemIds.push(itemId);

               this.#notificationService.notify({ type: "checked-out", item, member });
               return item;
               }

               returnItem(itemId, memberId) {
               const item = this.#itemRepository.findById(itemId);
               if (!item) throw new Error(`No item found with id "${itemId}"`);

               const member = this.#memberRepository.findById(memberId);
               if (!member) throw new Error(`No member found with id "${memberId}"`);

               item.returnItem();
               member.checkedOutItemIds = member.checkedOutItemIds.filter((id) => id !== itemId);

               this.#notificationService.notify({ type: "returned", item, member });
               return item;
               }

               listAvailable() {
               return this.#itemRepository.list().filter((item) => !item.isCheckedOut);
               }
               }
