//Anonymous
let titleCase= function (string) {
    string = string.toLowerCase().split(' ');
    //console.log(string);
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        //console.log(string[i].slice(1));
    }
    return string.join(' ');
    }
    const result = titleCase("MANI VASAGAM");
    console.log(result);

    //IIFE
    (function()
    {
        let string= `MANI VASAGAM`;
        string = string.toLowerCase().split(' ');
    //console.log(string);
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        //console.log(string[i].slice(1));
    }
    console.log(string.join(' '));
    }
    )();

    //Arrow
    let string= `MANI VASAGAM`;
    let titleCases = (string)=>{
        {
            
            string = string.toLowerCase().split(' ');
        //console.log(string);
        for (var i = 0; i < string.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
            //console.log(string[i].slice(1));
        }
        console.log(string.join(' '));
        }
    }
    titleCases(string);