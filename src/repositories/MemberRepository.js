export default class MemberRepository {
  #members = new Map();

  add(member) {
    this.#members.set(member.id, member);
    return member;
    }

  findById(id) {
    return this.#members.get(id) ?? null;
    }

  list() {
    return Array.from(this.#members.values());
                      }
                      }
