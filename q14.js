class hotel {
    Rno;
    NOD;
    Name;
    Tarrif;
    CALC() {
        let Amount;
        Amount = this.NOD * this.Tarrif;
        if (Amount > 10000)
            Amount = Amount * 1.05;
        return Amount;
    }

    Checkin() {


        this.Rno = parseInt(prompt("Enter the Room no:"));
        this.Name = prompt("Enter the Name:");
        this.Tarrif = parseInt(prompt("Enter the Tarrif:")); this.NOD = parseInt(prompt("Enter the No. of Days: "));
    }



    Checkout() {
        document.write("Room no: " + this.Rno + "<br>"); document.write("Name: " + this.Name + "<br>");
        document.write("Tarrif: " + this.Tarrif + "<br>"); document.write("No. of days: " + this.NOD + "<br>"); document.write("Amount: " + this.CALC());
    }
}
let h = new hotel();
h.Checkin();
h.Checkout();