interface Iproduct{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;}

abstract class ProductTemp implements Iproduct{
    public Name: string;
    public Price: number;
    public Qty: number;
    public Total(): number {
        return this.Qty*this.Price;
    }
    abstract public Print():void;
}

class ProductComponent extends ProductTemp{
    Name="Device one";
    Price=345.3;
    Qty=4;
    Total(){
        return this.Qty * this.Price;
    }
    Print() {
        console.log(`
            Name: ${this.Name}
            Price: ${this.Price}
            Qty: ${this.Qty}
            Total: ${this.Total()}
        `)
    }
}
let ob = new ProductComponent();
ob.Print();