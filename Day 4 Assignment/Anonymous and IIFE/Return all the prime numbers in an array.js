//Anonymous
var a = [1,2,3,4,5,6,7,8,9,10]
var primeArray = [];
let isPrime= function (item) {
    var divider = item / 2;
      for (var j = 2; j <= divider; j++) {
       if (item % j == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      primeArray.push(a[index])
  }
}
console.log(primeArray);

//IIFE
var a1 = [34,45,37,56,78]
var primeArray1 = [];
(function(){
    for(let i=0; i<a1.length;i++){  
        var divider = a1[i] / 2;
    
      for (var j = 2; j <= divider; j++) {
       if (a1[i] % j == 0) { 
        return false;
       }
    }
     }
     return true;
})();
for (var index = 0; index < a1.length; index++) {
    if (isPrime(a1[index])) {
        primeArray1.push(a1[index])
    }
  }
  console.log(primeArray1);
  
  //Arrow
  let a2 = [3,5,6,4,8,9,98];
  let primeArray2= [];
  let checkprime= (item)=>{
    let divisor = item /2;
    for( var j= 2; j<= divisor;j++){
        if(item % j == 0){
            return false;
        }
    }
    return true;
  }
  for (var index = 0; index < a2.length; index++) {
    if (checkprime(a2[index])) {
        primeArray2.push(a2[index])
    }
  }
  console.log(primeArray2);
