class Book {
    BOOK_NO; book_title; PRICE;
    INPUT() {

        this.BOOK_NO = prompt('Enter the book no.');
        this.book_title = prompt('Enter the book title:'); this.PRICE = parseInt(prompt('Enter the this. PRICE:'));
    }
    TOTAL_COST(n) {
        let tcost;
        tcost = this.PRICE * this.n;
        document.write('Total Cost:' + tcost);
    }
    PURCHASE() {
        this.n = parseInt(prompt('Enter the no. of copies to purchase:')); this.TOTAL_COST(this.n);
    }
}

let ob = new Book();
ob.INPUT();
ob.PURCHASE();