//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor(make,model,year,color,mileage) {
        super(make,model,year,color,mileage);
        this.maxPassangers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(passengerCount) {
        this.passenger = passengerCount
        if (this.passenger > this.maxPassangers) {
            console.log("That many people wont fit in the car!")
        }
        else {
            console.log("Everyone fits nicely!")
        }
    }

    start() {
        if (this.make !== 'Mercury') {
            this.fuel = 0
        }
        if (this.fuel > 0) {
            console.log("You have enough fuel to start the car, but since these instructions are horribly organized, there's no value to set to true in this case...")
        }
        else {
            console.log("You don't have enough fuel to start the car, but that doesn't matter since HackerU can't be bothered to update their assignments or instructions ever")
        }
    }

    scheduledService() {
        if (this.mileage > '30000'){
            console.log("It's time to service the car.")
            this.scheduleService = true
            return this.scheduleService
        }
        else {
            console.log("It's not time to service the car yet.")
            return this.scheduleService
        }
    }
}

let carOne = new Car('Mercury', 'sedan', '2023', 'green', 15293)

console.log(carOne)

carOne.start()
carOne.loadPassenger(3)
carOne.scheduledService()


let carTwo = new Car('Ford', 'Coup', '1964', 'Black', 105342)

console.log(carTwo)

carTwo.start()
carTwo.loadPassenger(2)
carTwo.scheduledService()

let carThree = new Car('Jeep', 'Truck', '2020', 'Red', 30000)

console.log(carThree)

carThree.start()
carThree.loadPassenger(6)
carThree.scheduledService()
