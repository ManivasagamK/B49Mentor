//fetchData();
const url="https://meowfacts.herokuapp.com/"
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
    const factData =  object.data;
    const factdiv= document.createElement("div")
    factdiv.setAttribute("class","col-md-12")
    factdiv.innerText= factData;
    RowDiv.appendChild(factdiv);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
let body = document.getElementById("body")
  let containerDiv = document.createElement("div")
  containerDiv.setAttribute("class","container")
body.appendChild(containerDiv);

let RowDiv = document.createElement("div")
RowDiv.setAttribute("class","row")
containerDiv.append(RowDiv);

