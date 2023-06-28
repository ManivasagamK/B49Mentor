//ANNONYMOUS
let Array=['mom', 'dad', 'appa','amma','teach']
let palindrome = function(Array){
    let pallis=[];
    for(i=0; i<Array.length; i++){
        if (Array[i].split('').reverse().join('')=== Array[i]){
            pallis.push(Array[i]);
        }
    }
    console.log(pallis);
}
palindrome(Array);

//IIFE
(function(){
    let pallis=[];
    for(i=0; i<Array.length; i++){
        if (Array[i].split('').reverse().join('')=== Array[i]){
            pallis.push(Array[i]);
        }
    }
    console.log(pallis);
})();

//Arrow
let Palindrome = (Array)=>{
    let pallis=[];
    for(i=0; i<Array.length; i++){
        if (Array[i].split('').reverse().join('')=== Array[i]){
            pallis.push(Array[i]);
        }
    }
    console.log(pallis);
}
Palindrome(Array);