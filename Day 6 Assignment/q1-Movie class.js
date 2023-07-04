class Movie{
    constructor(title,studio,rating){
        this.titile = title;
        this.studio = studio;
        if(rating===""){
            this.rating = "PG";
        }else{
        this.rating = rating;
        }
    }
        getPG(ipArr) {
        for(let i=0;i<ipArr.length;i++){
        if (ipArr[i].rating==="PG"){
           // console.log(ipArr[i].title);
            newArray.push(ipArr[i].title);
        }
        }
         console.log(newArray);
        return;  
        };
    }

let film = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(film);
let ipArr = [{title:"MIB", studio: "Disney", rating: "R"},
              {title:"MI", studio: "Paramount", rating: "PG"},
              {title:"Alien", studio: "marvel", rating: "PG"}];
let newArray=[];
film.getPG(ipArr);