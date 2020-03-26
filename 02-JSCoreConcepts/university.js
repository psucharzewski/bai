names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter) {
        let result = [];
        this.names.forEach(name => name.charAt(0) === letter ? result.push(name) : '');
        return new Students(result)
    }

    sort() {
        return new Students([...this.names].sort());
    }

    get() {
        return this;
    }

    getFirst(n) {
        return new Students([...this.names].splice(0, n))
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



