import { footer2 } from "../Components/footer2.js";
let footer2_div=document.getElementById("footer2");
footer2_div.innerHTML=footer2();

let cont_btn2=document.getElementById("continue_btn2");
let heightarr=[];
const heightdata=()=>{
    let height=document.getElementById("height").value;
    let height_unit=document.getElementById("heightunit").value;
    heightarr.push(height);
    heightarr.push(height_unit)
    localStorage.setItem("height",JSON.stringify(heightarr))
    window.location.replace("gender.html")
    
}

cont_btn2.onclick=()=>{
    heightdata()
}