class Person {
    constructor(firstname, lastname) {
        this.firsname = firstname;
        this.lastname = lastname;
    }

    getFirstAndLastName() {
        return `${this.firsname} ${this.lastname.toUpperCase()}`
    }

    getInitials(){
        const first = this.firsname.charAt(0).toUpperCase();
        const last = this.lastname.charAt(0).toUpperCase();
        return `${first}.${last}`
    }
}

const janNowak = new Person("Jan", "Nowak");
const me = new Person("Pawel", "Sucharzewski");

console.log(janNowak.getFirstAndLastName());
console.log(janNowak.getInitials());
console.log(me.getFirstAndLastName());
console.log(me.getInitials());