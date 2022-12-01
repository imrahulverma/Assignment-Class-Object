class FruitJiuce{
    pCode;
     pType;
    pSize;
    flavour;
    pPrice;
    input(){
    
    let a =prompt("Enter the Product Code : ");
    this.pCode=parseInt(a);
    this.flavour=prompt("Enter the Flavour (Orange/Apple,etc): "); this.pType=prompt("Enter the Pack Type (TetraPack/Bottle, etc) : ");
    let b=prompt("Enter the Pack Size (200m1/500ml/1L): ");
    this.pSize=parseInt(b);
    let c=prompt("Enter the Product Price : ");
    this.pPrice=parseInt(c);
    }
    discount(){
        this.pPrice-=10;
    }
    display(){
document.write("Product Code: "+this.pCode);
document.write("Flavour: "+this.flavour);
document.write("Pack Type: "+this.pType);
document.write("Pack Size: "+this.pSize);
document.write("Product Price: "+this.pPrice);
    }
}

let fj=new FruitJiuce();
fj.input();
fj.discount();
fj.display();