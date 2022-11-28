class Bank{
    name;acno;type;bal;
    initialise(){
        this.name="Rahul";
        this.acno="000435452322";
        this.type="Savings";
        this.bal="3000"
    }
    depo(a){
       
        this.deposit=a;
        this.bal=parseInt(this.bal) + parseInt(this.deposit);
    }
    withdraw(b){
       this.withdraw=b;
        if(this.bal-this.withdraw<=1000){
            console.log("Min balance should be 1000")
        }
        else
        this.bal=this.bal-this.withdraw;
    }
    print(){
       
      console.log(this.name)
      console.log(this.acno)
      console.log(this.type)
      console.log(this.bal)
    }
}

let tr1=new Bank;
tr1.initialise();
tr1.withdraw(500);

tr1.print()
