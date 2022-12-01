class Parking{
    vno;hours;bill;
    input(){
        this.vno=prompt("Enter vehicle no.")
        this.hours=prompt("Enter hour for which vehicle is parked")
    }
    calculate(){
        if(this.hours<=1){
            this.bill=3
        }
        else if(this.hours>1){
            this.bill=(1*3)+((this.hours-1)*1.5)
        }

    }
    display(){
        document.write("Vehicle no: "+this.vno+"<br>")
        document.write("No of hours: "+this.hours+"<br>")
        document.write("Bill: "+this.bill+"<br>")
    }
}

let v1=new Parking();
v1.input();
v1.calculate();
v1.display();