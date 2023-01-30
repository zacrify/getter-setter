const person = {
    firstName: 'Pi',
    lastName: 'Shetshotisak',
    get fullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    set fullName(inputFullName) {
        const name = inputFullName.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}
// setter allows the method to act like a property and change the value like a property. 
person.fullName = 'Elijah Wood';

// getter just responsible for change person.fullName() to person.fullName when called.
console.log(person.fullName);
console.log(person.firstName);

// person.fullName;

