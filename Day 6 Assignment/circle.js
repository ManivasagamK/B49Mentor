class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(num){
        this.radius=num;
    }
    getColor(){
        return this.color;
    }
    get Color(){
        return this.color;
    }
    set Color(string){
        this.color=string;
    }
    getArea(){
        let Area= Math.PI *Math.pow(2,this.radius);
        return Area;
    }
    getCircum(){
        let circumference = 2 * Math.PI *this.radius;
        return circumference;
    }
}
let obj = new Circle(1.0,"red");
console.log(`
            ${obj.getRadius()},
            ${obj.getColor()},
            ${obj.getArea().toFixed(2)},
            ${obj.getCircum().toFixed(2)}.`);
console.log(`before: `, obj.Radius);
obj.Radius = 2.3;
console.log(`After: `, obj.Radius);
console.log(`before: `,obj.Color);
obj.Color= "blue";
console.log(`After: `, obj.Color);
