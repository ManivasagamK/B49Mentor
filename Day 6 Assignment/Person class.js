//Person class to store data

class Person {
    constructor(name, Age, Gender){
        this.name = name;
        this.Age = Age; 
        this.Gender = Gender;
    }
    
    showDetails(){
        console.log(`Name of person is ${this.name}. His age is ${this.Age} and the gender is ${this.Gender}`);
    }
}

const result = new Person("Mani", 26, "male");
result.showDetails();