// async function fetchData() {
//     const url = "https://restcountries.com/v3.1/all"; //webAPI URL
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("Data fetched successfully!!", data);
//     } catch (err) {
//       console.log("Error fetching data: ", err);
//     }
//   }
  
//   fetchData();

const url="https://poetrydb.org/title/Ozymandias/lines.json"
  const promisefetch= fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log("Network response was not ok.");
      }
    })
    .then((data) => {
      console.log("DATA: ", data);
      let ColumnDiv = document.createElement("Div")
      ColumnDiv.setAttribute("class","col-md-10")
      RowDiv.appendChild(ColumnDiv)
    //   for(let i=0; i<data.lines.length;i++){}
    const Poemlines = data.map(data=> data.lines);
        
        
        ColumnDiv.innerHTML= Poemlines;
        
    })

    .catch((err) => {
      console.log("Error: ", err);
    });

    // function listOfLines(data) {
    //     for(let i=0; i<14; i++){
    //     const PoemLines =data.map(data => `<p>${data.lines[i]}</p>`);
    //     return `<ul>${PoemLines}</ul>`}
    //   }
    let body = document.getElementById("body")
  let containerDiv = document.createElement("div")
  containerDiv.setAttribute("class","container-fluid")
body.appendChild(containerDiv);

let RowDiv = document.createElement("div")
RowDiv.setAttribute("class","row")
containerDiv.append(RowDiv);
