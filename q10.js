class Library {
    acc_num; title; author;
    input() {
        this.acc_num = prompt("Enter accession number")
        this.title = prompt("Enter book title")
        this.author = prompt("Enter book author name")
    }
    compute() {
        let late=prompt("Enter no. of late days")
            
            this.fine=late*2;
    }
    display() {
        document.write("Accession No."+this.acc_num+"<br>")
        document.write("Title: "+this.title+"<br>")
        document.write("Author: "+this.author+"<br>")
        document.write("Fine: "+this.fine+"<br>")

    }
}

let book1=new Library()
book1.input();
book1.compute();
book1.display();