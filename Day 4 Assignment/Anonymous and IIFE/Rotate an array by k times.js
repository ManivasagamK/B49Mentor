//ANNONYMOUS
let Rotate= function (A, K) {
    
    if (A.length === K || K === 0) {
        return A;
    }

    K = K % A.length;
   // console.log(K);
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
       
    }
    return A;
    //console.log(A);
    
}
let A= ['a',1,true,'45',32];
    let K = 3;
console.log(Rotate(A,K));

//IIFE
(function(){
    let A= ['a',1,true,'45',32];
    let K = 3;
    if (A.length === K || K === 0) {
        return A;
    }

    K = K % A.length;
   // console.log(K);
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
       
    }
    console.log(A);
})();

