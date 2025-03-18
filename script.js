
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return this.make + " " + this.model;
    }
}


class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); 
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}


let car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); 
console.log(car.getTopSpeed());  


window.Car = Car;
window.SportsCar = SportsCar;
