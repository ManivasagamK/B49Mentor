
let Name= "Mani";
var BaseAmount = .50;
var cities = ["Udumalpet", "Pollachi", "Coimbatore" ];
var uberRates = [50, 100, 1500];
for(let i=0;i<cities.length;i++){
    let finalRate = (uberRates[i]) * BaseAmount;
    console.log(`Hello ${Name} welcome to the Uber rate Estimator`);
class UberRate{
    constructor(Name,cities,BaseAmount, uberRates){
        this.Name= Name;
        this.cities=cities[i];
        this.BaseAmount= BaseAmount;
        this.uberRates=uberRates[i];
        this.finalRate=finalRate;
    }
    Result(){
        console.log(`Customer Name- ${this.Name}. 
        Your city is ${cities[i]}.
        Your uberRate of city is ${uberRates[i]}.
        The BaseFee is ${ BaseAmount}.
        Your UberEstimate is ${this.finalRate}`);
    }
}
let output=new UberRate(Name,cities,BaseAmount, uberRates);
output.Result();
};
