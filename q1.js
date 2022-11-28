class Employee{
    constructor(b){
        this.basic=b;
    }
    calc(){
        let da,ha,pf,np,gp;
        da=0.25*this.basic;
        ha=0.15*this.basic;
        pf=(8.33/100)*this.basic;
        np=this.basic+da+ha;
        gp=np-pf
        console.log(`Gross Pay : ${gp}`)
    }
}

let emp1=new Employee(30000);
emp1.calc();
