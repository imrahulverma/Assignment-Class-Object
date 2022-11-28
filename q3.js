class Student{
    name;age;m1;m2;m3;max;avg;
    constructor(){
        this.name=prompt("Enter your Name")   
     this.age=prompt("Enter your Age")   
     this.m1=parseInt(prompt("Enter M1"))   
     this.m2=parseInt(prompt("Enter M2"))   
     this.m3=parseInt(prompt("Enter M3"))   
    }
    disp(){
        __proto__:this.calc();
        document.write(`Name: ${this.name}\n`)
        document.write(`Age: ${this.age}\n`)
        document.write(`Marks: ${this.m1+this.m2+this.m3}\n`)
        document.write(`Max marks: ${this.max}\n`)
        document.write(`Average: ${this.avg}`)
    }
    calc(){
        this.max=Math.max(Math.max(this.m1,this.m2),this.m3)
        this.avg=(this.m1+this.m2+this.m3)/3;
    }
}
let stu1=new Student();
stu1.disp();
