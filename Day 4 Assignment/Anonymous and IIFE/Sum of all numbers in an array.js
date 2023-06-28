//Anonymous
let sum = function(value){
    let Array1= [1,2,3,4];
    var result =0;
    for(let i=0; i<Array1.length; i++){
        result+= Array1[i];
    }
    console.log(result);
}
sum();

//IIFE
(function(){
    let Array1= [1,2,3,4];
    var result =0;
    for(let i=0; i<Array1.length; i++){
        result+= Array1[i];
    }
    console.log(result);
})();

//Arrow
let Add= (value)=>{
    let Array1= [1,2,3,4];
    var result =0;
    for(let i=0; i<Array1.length; i++){
        result+= Array1[i];
    }
    console.log(result);
}
Add();