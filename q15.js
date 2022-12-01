class Telephone {
    prv;
    pre;
    call;
    name;
    amt;

    total; input() {
        this.prv = parseInt(prompt("Enter the previous meter reading:")); this.pre = parseInt(prompt("Enter the present meter reading:")); this.name = prompt("Enter the name:");
    }

    cal() {
        this.call = this.pre - this.prv;
        if (this.call <= 100)
            this.amt = 0;
        else if (this.call > 100 && this.call <= 200)
            this.amt = 0 * 100 + (this.call - 100) * 0.90;
        else if (this.call > 200 && this.call <= 400) this.amt = 0 * 100 + 100 * 0.90 + (this.call - 200) * 0.80;
        else
            this.amt = 0 * 100 + 100 * 0.90 + 200 * 0.80 + (this.call - 400) * 0.70;
        this.total = this.amt + 180;
    }
    display() {

        document.write("Name : " + this.name + "<br>" + "Calls Made: " + this.call + "<br>" + "Amount : " + this.amt + "<br>" + "Total Amount: " + this.total);
    }

}

let telephone = new Telephone();
telephone.input();
telephone.cal();
telephone.display();
