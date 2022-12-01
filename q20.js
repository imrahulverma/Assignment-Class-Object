class RailwayTicket {
  name;
  coach;
  mobno;
  amt;
  totalamt;
  input() {
    this.name = prompt("Enter name: ");
    this.coach = prompt(
      "Enter coach type:(First_AC,Second_AC,Third_AC,Sleeper) "
    );
    this.mobno = prompt("Enter mob no: ");
    this.amt = parseInt(prompt("Enter basic amount"));
  }
  update() {
    if (this.coach == "First_AC") {
      this.totalamt = this.amt + 700;
    } else if (this.coach == "Second_AC") {
      this.totalamt = this.amt + 500;
    } else if (this.coach == "Third_AC") {
      this.totalamt = this.amt + 250;
    } else if (this.coach == "Sleeper") {
      this.totalamt = this.amt;
    }
  }
  display() {
    document.write("Name" + this.name + "<br>");
    document.write("Coach" + this.coach + "<br>");
    document.write("Mob No." + this.mobno + "<br>");
    document.write("Total Amount" + this.totalamt + "<br>");
  }
}
let t1 = new RailwayTicket();
t1.input();
t1.update();
t1.display();
