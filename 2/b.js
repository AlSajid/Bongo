// constructor design pattern

class Vehicle {
    constructor(wheels, passenger, gas) {
        this.wheels = wheels;
        this.passenger = passenger;
        this.gas = gas;
    }
}

class Car extends Vehicle {
    constructor(passenger, gas) {
        const wheels = 4;
        super(wheels, passenger, gas)
    }
}

class Plane extends Vehicle {
    constructor(passenger, gas) {
        const wheels = 2;
        super(wheels, passenger, gas)
    }
}

const audi = new Car (4, true);
const boeing = new Plane (300, false);

console.log(audi);
console.log(boeing);
