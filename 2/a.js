// Explain how can you use the pattern to create car and plane class?
/*
Explanation
-------------
    The given code shows an interface containing three abstract methods. 
    I am using the Factory Design Pattern to create car and plane class. 
    In this pattern, a generic interface is used to create specific types of objects.
*/


class vehicle {
    set_num_of_wheels(wheels) {
        this.wheels = wheels;
    }

    set_num_of_passengers(passenger) {
        this.passenger = passenger;
    }

    has_gas(gas) {
        this.gas = gas;
    }
}


class Car extends vehicle {
    constructor(passenger, gas) {
        const wheels = 4;
        
        super();
        this.set_num_of_wheels(wheels);
        this.set_num_of_passengers(passenger);
        this.has_gas(gas);
    }


}

class Plane extends vehicle {
    constructor(passenger, gas) {
        const wheels = 2;

        super();
        this.set_num_of_wheels(wheels);
        this.set_num_of_passengers(passenger);
        this.has_gas(gas);
    }
}


class vehicleFactory {
    createVehicle(type) {
        switch (type) {
            case 'Car':
                return new Car(4, true);
            case 'Plane':
                return new Plane(100, false);
        }
    }
}



const factory = new vehicleFactory()
const audi = factory.createVehicle('Car');
const boeing = factory.createVehicle('Plane');

console.log(audi);
console.log(boeing);
