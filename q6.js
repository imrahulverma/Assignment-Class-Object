class Student{
    name;hindi;english;maths;computer;grade;average;
    constructor(){
        this.name=prompt("Enter your Name")   
     this.hindi=parseInt(prompt("Enter marks in Hindi"))   
     this.english=parseInt(prompt("Enter marks in English"))   
     this.computer=parseInt(prompt("Enter marks in Computer"))   
     this.maths=parseInt(prompt("Enter marks in Maths"))   
    }
    calcavg(){
        this.average=(this.maths+this.computer+this.english+this.hindi)/4;
        document.write("Average Marks: "+this.average)
        if(this.average>=90){
            document.write("Grade : A++")
        }
        else if(this.average>=75 && this.average<=89){
            document.write("Grade : A")
        }
        else if(this.average>=60 && this.average<=74){
            
            document.write("Grade : B")
        }
    }
}

let stu1=new Student();
stu1.calcavg();