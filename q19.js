class bill{
    n;unit;bill;
    input(){
        this.n=prompt("Enter name of customer")
        this.unit=prompt("Units Consumed")
    }
    calculate(){
        if(this.unit<=100){
            this.bill=this.unit*2
        }
        else if(this.unit>100 && this.unit<=200){
            this.bill=(100*2)+((this.unit-100)*3)
        }
        else if(this.unit>=300){
            this.bill=(100*2)+(100*3)+((this.unit-200)*5)
        }
    }
    display(){
        document.write("Customer name: "+this.n+"<br>")
        document.write("Unit Consumed: "+this.unit+"<br>")
        document.write("Bill Amount: "+this.bill+"<br>")
    }
}
let b1=new bill()
b1.input();
b1.calculate();
b1.display();