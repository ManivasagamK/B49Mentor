//Annonymous
let median = function(a, b){
    let c = [...a, ...b].sort((a, b) => a - b);
    //console.log(c);

    let half = c.length / 2 | 0;
    //console.log(half);
    if (c.length % 2){ return c[half];}else{
    return (c[half] + c[half - 1]) / 2;}
}
var A1 = [1, 12, 15, 26, 38];
var A2 = [2, 13, 17, 30, 45, 47];
console.log(median(A1, A2));

//IIFE
(function(){let median = function(a, b){
    let c = [...a, ...b].sort((a, b) => a - b);
    //console.log(c);

    let half = c.length / 2 | 0;
    //console.log(half);
    if (c.length % 2){ return c[half];}else{
    return (c[half] + c[half - 1]) / 2;}
}
var A1 = [1, 12, 15, 26, 38];
var A2 = [2, 13, 17, 30, 45, 47];
console.log(median(A1, A2));
})();
