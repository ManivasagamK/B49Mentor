var person1 = {
    firstname : "Manivasagam",
    lastName : "K",
    Age: 25,
    Gender: "Male",
    Native: "Tirupur",
    Degree: "M.Sc. Agri",
    get: function(){
        console.log(`firstname is ${this.firstname}`);
        console.log(`lastName is ${this.lastName}`);
        console.log(`Age is ${this.Age}`);
        console.log(`Gender is ${this.Gender}`);
        console.log(`Native is ${this.Native}`);
        console.log(`Degree is ${this.Degree}`);

    }
}
person1.get();