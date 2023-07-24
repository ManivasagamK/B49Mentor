var max=10;
var Display = document.getElementById("Screen");
Display.style.margin= "auto";
Display.style.textAlign = "center";
Display.style.border = "black 1px solid";
Display.style.maxWidth ="1000px"
setTimeout(()=>{
    Display.innerHTML= max--;
    setTimeout(()=>{
        Display.className="badge rounded-pill bg-light text-dark";
        Display.innerHTML= max--;
        setTimeout(()=>{
            Display.className="badge rounded-pill bg-danger";
            Display.innerHTML= max--;
            setTimeout(()=>{
                Display.className="badge rounded-pill bg-light text-dark";
                Display.innerHTML= max--;
                setTimeout(()=>{
                    Display.className="badge rounded-pill bg-danger";
                    Display.innerHTML= max--;
                    setTimeout(()=>{
                        Display.className="badge rounded-pill bg-light text-dark";
                        Display.innerHTML= max--;
                        setTimeout(()=>{
                            Display.className="badge rounded-pill bg-danger";
                            Display.innerHTML= max--;
                            setTimeout(()=>{
                                Display.className="badge rounded-pill bg-light text-dark";
                                Display.innerHTML= max--;
                                setTimeout(()=>{
                                    Display.className="badge rounded-pill bg-danger";
                                    Display.innerHTML= max--;
                                    setTimeout(()=>{
                                        Display.className="badge rounded-pill bg-light text-dark";
                                        Display.innerHTML= max--;
                                        setTimeout(()=>{
                                            Display.className="badge rounded-pill bg-danger";
                                            Display.innerHTML= "Happy Independence Day"
                                            Display.style.fontSize= "40px";
                                            Display.style.maxWidth="600px"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)