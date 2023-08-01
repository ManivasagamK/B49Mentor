
const url="https://dog.ceo/api/breeds/image/random"
let body = document.getElementById("body")
  let containerDiv = document.createElement("div")
  containerDiv.setAttribute("class","container")
body.appendChild(containerDiv);

let RowDiv = document.createElement("div")
RowDiv.setAttribute("class","row")
containerDiv.append(RowDiv);

fetch(url)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("Network response was not ok.");
    }
  })
  .then((object) => {
    console.log("DATA: ", object);
    
    const factData =  object.message;
    factdiv.innerHTML= `<a href="${factData}" target="_blank">Click here for the image </a>`
  
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

  const factdiv= document.createElement("div")
  factdiv.setAttribute("class","col-md-12")
  RowDiv.append(factdiv);