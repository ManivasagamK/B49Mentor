//Anonymous:
let Array=[1,2,3,4];
for(let i=0; i<Array.length;i++){
let odd = function(value){
    if(value % 2 !== 0){
        console.log(value);
    }
    }
    odd(Array[i]);
}

//IIFE
(function(){
    let Array1=[1,2,3,4];
for(let i=0; i<Array1.length;i++){
    if(Array1[i] % 2 !== 0){
        console.log(Array1[i]);
    }
    }
})();

//Arrow
let odd = (values) =>{
    let Array1=[1,2,3,4];
for(let i=0; i<Array1.length;i++){
    if(Array1[i] % 2 !== 0){
        console.log(Array1[i]);
            }
}
};
odd();