/**
 * The Factory pattern is another creational pattern concerned with the notion of creating objects. 
 * Where it differs from the other patterns in its category is that it doesn’t explicitly require the use of a constructor. 
 * Instead, a Factory can provide a generic interface for creating objects, 
 * where we can specify the type of factory object we wish to be created
 */

function Car(options) {
   this.doors = options.doors || 4;
   this.color = options.color || 'silver';
   this.state = options.state || 'brand new';
}

function Truck(options) {
   this.state = options.state || 'used';
   this.wheelSize = options.wheelSize || 'large';
   this.color = options.color || 'blue';
}

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

  if( options.vehicleType === "car" ){
    this.vehicleClass = Car;
  }else{
    this.vehicleClass = Truck;
  }

  return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({  vehicleType: "car", 
                                      color: "yellow", 
                                      doors: 6 });

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(car instanceof Car); 

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);

/**

When to Use the Factory Pattern :-

The Factory pattern can be especially useful when applied to the following situations:

1. When our object or component setup involves a high level of complexity.

2. When we need to easily generate different instances of objects depending on the environment we are in.

3. When we’re working with many small objects or components that share the same properties.

4. When composing objects with instances of other objects that need only satisfy an API contract 
   (a.k.a., duck typing) to work. This is useful for decoupling.
 */