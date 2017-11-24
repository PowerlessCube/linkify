// Classes to reuse code - like a cookie cutter for cookies.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

// Part 2 - Sub classes

class Student extends Person {
    // Overide the constuctor function
    constructor(name, age, major) {
        //calling parent constructure.
        super(name, age);
        this.major = major;
    }
    
    hasMajor() {
        // !! for undefined returns false.
        return !!this.major;
    }

    // Overriding a method:
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

// Challenge: Traveler -> Person
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    // Methods
    getGreeting() { // overrides Person method.
        let greeting = super.getGreeting();
        
        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        
        return greeting;
    }

}

// Console.logs objects out to browser console
const me = new Student('Alistair Mackay', 29, 'Economics');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getGreeting());

const traveler = new Traveler('Meryl Mackay', 27, 'Norway');
console.log(traveler);

