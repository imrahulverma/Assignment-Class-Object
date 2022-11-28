class Bill{
    name;consumerno;unitconsumed;bill;
    datainput(){
    this.name=prompt("Enter Name")
    this.consumerno=prompt("Enter Consumer no")
    this.unitconsumed=prompt("unit consumed:")
    }
    compute(){
        
        if(this.unitconsumed<=100)
        {
            this.bill=this.unitconsumed*1.20
        }
        else if(this.unitconsumed>100 && this.unitconsumed<=200){
            
            this.bill=this.unitconsumed*2.20
        }
        else if(this.unitconsumed>200 && this.unitconsumed<=300){
            
            this.bill=this.unitconsumed*3.20
        }
        else if(this.unitconsumed>300){
            this.bill=this.unitconsumed*4

        }
    }
    display(){
        document.write("Consumer Name: "+this.name+"<br>")
        document.write("Consumer No: "+this.consumerno+"<br>")
        document.write("Unit Consumed: "+this.unitconsumed+"<br>")
        document.write("Bill Amount: "+this.bill+"<br>")
    }
}

let c1=new Bill();
c1.datainput();
c1.compute();
c1.display();