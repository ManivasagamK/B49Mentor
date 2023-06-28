//Annonymous
let removeduplicate = function(){
    let A1= [1,1,45,65,34,45,2,5,6,8,9,4];
    let outputarray=[];
    for (let i= 0; i<A1.length; i++){
        if (A1.indexOf(A1[i])=== A1.lastIndexOf(A1[i])){
            outputarray.push(A1[i]);
        }
    }
    console.log(outputarray);
}
removeduplicate();

//IIFE
(function(){
    let A1= [1,1,45,65,34,45,2,5,6,8,9,4];
    let outputarray=[];
    for (let i= 0; i<A1.length; i++){
        if (A1.indexOf(A1[i])=== A1.lastIndexOf(A1[i])){
            outputarray.push(A1[i]);
        }
    }
    console.log(outputarray);
})();