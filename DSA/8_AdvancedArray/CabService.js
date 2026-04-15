const prompt = require("prompt-sync")();

class CabService {
  constructor() {
    this.car_type = "";
    this.km = 0;
    this.bill = 0;
  }

  accept() {
    this.car_type = prompt("Enter the Car Type AC or NON-AC : ").toUpperCase()
    this.km = Number(prompt("Enter the KM travelled : "));
  }

  calculate() {
    if (this.car_type == "AC") {
      if (this.km <= 5) this.bill = 150;
      else this.bill = 150 + (this.km - 5) * 10;
    } else if (this.car_type == "NON-AC") {
      if (this.km <= 5) this.bill = 120;
      else this.bill = 120 + (this.km - 5) * 8;
    }
  }

  display() {
    console.log("CAR TYPE : " + this.car_type);
    console.log("KILOMETER TRAVELLED : " + this.km);
    console.log("TOTAL BILL : " + this.bill);
  }
}

let obj = new CabService();
obj.accept();
obj.calculate();
obj.display();
