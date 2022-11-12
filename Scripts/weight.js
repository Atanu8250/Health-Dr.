import { footer2 } from "../Components/footer2.js";
let footer2_div=document.getElementById("footer2");
footer2_div.innerHTML=footer2()


let cont_btn=document.getElementById("continue_btn");
let weightarr=[]
const weightdata=()=>{
    let current_weight=document.getElementById("Current_w").value;
    let current_weight_unit=document.getElementById("Current_w_unit").value;
    let goal_weight=document.getElementById("goal_w").value;
    let goal_weight_unit=document.getElementById("goal_w_unit").value;
    weightarr.push(current_weight);
    weightarr.push(current_weight_unit);
    weightarr.push(goal_weight);
    weightarr.push(goal_weight_unit)
    localStorage.setItem("weight",JSON.stringify(weightarr))
    window.location.replace("height.html")
}
cont_btn.onclick=()=>{
    weightdata()
}