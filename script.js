class car{
    constructor(make, model){
        this.make = Toyota;
        this.model = Corolla;
    }
    getMakeModel(){
        return this.make + " " + this.model;
    }
}

class SportsCar extends car{
    constructor(make, model, topSpeed){
        super(make, model);
        this.topSpeed = 400;
    }
    getTopSpeed(){
        return this.topSpeed;
    }
}

let car = new SportsCar(make, model, topSpeed);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
