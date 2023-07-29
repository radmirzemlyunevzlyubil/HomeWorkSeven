class Car {
    constructor(make, speedKmH) {
      this.make = make;
      this.speedKmH = speedKmH;
    }
  
    get speedUS() {
      return this.speedKmH / 1.6;
    }
  
    set speedUS(speedUS) {
      this.speedKmH = speedUS * 1.6;
    }
  
    accelerate() {
      console.log(`${this.make} ускоряется!`);
      this.speedKmH += 10;
    }
  
    brake() {
      console.log(`${this.make} тормозит...`);
      this.speedKmH -= 5;
    }
  }
  
  const car1 = new Car("Форд", 120);
  
  console.log(`Текущая скорость: ${car1.speedKmH} км/ч`);
  console.log(`Текущая скорость: ${car1.speedUS} миль/ч`);
  
  car1.speedUS = 75;
  console.log(`Текущая скорость: ${car1.speedKmH} км/ч`);
  
  car1.accelerate();
  console.log(`Текущая скорость: ${car1.speedKmH} км/ч`);
  console.log(`Текущая скорость: ${car1.speedUS} миль/ч`);
  
  car1.brake();
  console.log(`Текущая скорость: ${car1.speedKmH} км/ч`);
  console.log(`Текущая скорость: ${car1.speedUS} миль/ч`);
  