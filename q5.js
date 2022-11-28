class Mobike{
    bno;phno;name;days;charge;
    constructor(){
        this.bno=prompt("Enter bike no.")
        this.phno=prompt("Enter phone no.")
        this.name=prompt("Enter name")
        this.days=prompt("Enter days for bike taken on rent")
    }
    compute(){
        if(this.days<=5){
            this.charge=this.days*500;
        }
        else if(this.days>5 && this.days<=10){
            this.charge=(5*500)+((this.days-5)*400)
        }
        else if(this.days>10){
            this.charge=(5*500)+(5*400)+((this.days-10)*200)
        }
    }
    disp(){
        document.write("Bike No.  Phone No. Name  No.of Days  Charge"+"<br>")
        document.write(this.bno+" "+this.phno+" "+this.days+" "+this.charge)
    }
}

let cust1=new Mobike;
cust1.compute();
cust1.disp();