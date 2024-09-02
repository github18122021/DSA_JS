

// first way to set prototype using parent's constructor function's prototype property

function Animal(name) {
    this.name = name;
}

let rabbit_01 = new Animal("rab_01");
console.log(rabbit_01);

Animal.prototype.canSleep = function(canSleep) {
    this.canSleep = canSleep;
}
function Rabbit(canSleep, canWalk, canEat, canDo) {
    this.canSleep(canSleep);
    this.canWalk = canWalk;
    this.canEat = canEat;
    this.canDo = canDo;
}

// wrong way
// console.log(Rabbit.prototype)
// console.log(Animal.prototype)
// Rabbit.prototype = Animal.prototype;
// Rabbit.prototype.constructor = Rabbit;
// console.log(Animal.prototype)
// console.log(Rabbit.prototype)

// // works okay this way, but manually copying props
// Rabbit.prototype = {...Animal.prototype, constructor: Rabbit};
// console.log(Animal.prototype);
// console.log(Rabbit.prototype)


console.log(Rabbit.prototype)
console.log(Animal.prototype)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)
console.log(Rabbit.prototype)
console.log(Animal.prototype)

let rabbit_02 = new Rabbit(true, true, "carrot", "jump");

console.log(rabbit_02);



