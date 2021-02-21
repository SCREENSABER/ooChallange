class Vehicle{
    constructor(make, model, year){

this.make = make;
this.model = model;
this.year = year;
    }
honk() {
    return (`the ${this.make}, ${this.model} has honked`)
}};

class Car extends Vehicle {
    numWheels = 4;
}

class Motorcycle extends Vehicle {
    numWheels = 2;
revEngine() {
    return "VROOM!!!"
}
}

class Garage {
    vehicles = []
    capacity = 4
    add() {
    }
        
    }

