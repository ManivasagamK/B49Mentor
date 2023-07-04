class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
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