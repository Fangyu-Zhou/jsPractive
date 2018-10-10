let animal = {
    kind: 'human'
};

// let people = {};

// people.__proto__ = animal;
let people = Object.create(animal, {food : {value : "apple"}});



// people.prototype = animal;  
// this will not work because object only have __proto__ property
console.log(people.kind);
animal.kind = 'Dog';
console.log(people.kind);
console.log(people.food)


//pseudo class
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}



Person.prototype.fullNamePrototype = function() {
    return this.firstName + " " + this.lastName;
}

// create a instance of a class Method 1
let a = new Person("A", "B");
// create a instance of a class Method 2
let b = {};
Person.call(b, "C", "D");

console.log(a.fullName());
console.log(a.fullNamePrototype());
//this two will give the same result because the instance a's __proto__
//is point the same object that Person's prototype points to


