class movieMagic{
    year;;title;rating;
    input(){
        this.year=prompt("Enter year of release");
        this.title=prompt("Enter title")
        this.rating=prompt("Enter Rating (0 to 5)")
    }
    calculate(){
        if(this.rating>=0 && this.rating<=2){
            document.write("Flop")
        }
        else if(this.rating>=2.1 && this.rating<=3.4){
            document.write("Semi Hit")
            
        }
        else if(this.rating>=3.5 && this.rating<=4.5){
            document.write("Semi Hit")
            
        }
        else if(this.rating>=3.6 && this.rating<=5)
        {
            document.write("Semi Hit")

        }
    }
    display(){
        document.write("Year of release: "+this.year+"<br>")
        document.write("Title: "+this.title+"<br>")

    }
}
let m1=new movieMagic;
m1.input();
m1.display()
m1.calculate();