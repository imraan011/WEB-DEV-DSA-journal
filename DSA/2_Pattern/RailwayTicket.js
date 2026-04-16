const prompt = require("prompt-sync")();

class Railway {
  constructor() {
    this.name = "";
    this.coach = "";
    this.mob_no = 0;
    this.amt = 0;
    this.totalamt = 0;
  }

  accept() {
    this.name = prompt("Enter the name : ");
    console.log(`coach Type :
1. First AC
2. Second AC
3. Third AC
4. Sleeper`);

    this.coach = prompt("Enter the coach Type : ");
    this.mob_no = Number(prompt("Enter the 10 Digit mobile number : "));
    this.amt = Number(prompt("Enter the amount of ticket : "));
  }

  update() {
    if (this.coach == 1) this.totalamt = 700 + this.amt;
    else if (this.coach == 2) this.totalamt = 500 + this.amt;
    else if (this.coach == 3) this.totalamt = 250 + this.amt;
    else if (this.coach == 4) this.totalamt = this.amt;
    else console.log("Coach Type Error");
  }

  display() {
    console.log("");
    
    console.log("Name : " + this.name);
    console.log("COACH : " + this.coach);
    console.log("MOBILE NUMBER : " + this.mob_no);
    console.log("TOTAL AMOUNT : " + this.totalamt);
  }
}

let obj = new Railway();

obj.accept();
obj.update();
obj.display();
