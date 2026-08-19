export default class Member {
constructor({ id, name, email }) {
this.id = id;
this.name = name;
this.email = email;
this.checkedOutItemIds = [];
}
}
