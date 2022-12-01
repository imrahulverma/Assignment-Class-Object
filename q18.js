class bookFair{
    Bname;price;
    input(){
        this.Bname=prompt("Enter name of book")
        this.price=prompt("Enter price of book")
    }
    calculate(){
        let discount;
        if(this.price<=1000){
            discount=0.02*this.price
        }
        else if(this.price>1000 && this.price<=3000){
            discount=0.1*this.price
        }
        else if(this.price>3000){
            
            discount=0.15*this.price
        }
        this.price=this.price-discount;
    }
    display(){
        document.write("Book name: "+this.Bname+"<br>")
        document.write("Price after discount: "+this.price+"<br>")
        }
}

let b1=new bookFair();
b1.input();
b1.calculate();
b1.display();