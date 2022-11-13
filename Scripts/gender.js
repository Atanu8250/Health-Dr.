import { footer2 } from "../Components/footer2.js";
let footer2_div=document.getElementById("footer2");
footer2_div.innerHTML=footer2();

let female_btn=document.getElementById("female");
let genderarr=[];
female_btn.onclick=()=>{
    genderarr.push("female")
    localStorage.setItem("gender",JSON.stringify(genderarr))
    window.location.replace("birth.html")
}
let male_btn=document.getElementById("male");
male_btn.onclick=()=>{
    genderarr.push("male")
    localStorage.setItem("gender",JSON.stringify(genderarr))
    window.location.replace("birth.html")
}