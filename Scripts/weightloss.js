import { footer2 } from "../Components/footer2.js";
let footer2_div=document.getElementById("footer2");
footer2_div.innerHTML=footer2();


let gender=JSON.parse(localStorage.getItem("gender"));
let weight=JSON.parse(localStorage.getItem("weight"));
let height=JSON.parse(localStorage.getItem("height"));


let calo;
let weightloss;
let goaltime;
if(gender[0]=="male" && weight[1]=="kg"){
    calo=Math.floor(eval(weight[2] * 2.2046 * 14))
    weightloss=Math.floor(eval(weight[0]-weight[2]));

    goaltime=Math.floor(eval(weightloss/(0.75)))

    let calories=document.getElementById("totalcal");
    calories.innerText=`${calo} Calories`

    let weight_loss=document.getElementById("loseweight");
    weight_loss.innerText=`${weightloss} KG`

    let weekweightloss=document.getElementById("weekloss");
    weekweightloss.innerText=`3/4 KG`

    let goal_time=document.getElementById("goaldate");
    goal_time.innerText=`${goaltime} WEEK`
}
else if(gender[0]=="male" && weight[1]=="lb"){
    calo=Math.floor(eval(weight[2]  * 14))
    weightloss=Math.floor(eval(weight[0]-weight[2]));

    goaltime=Math.floor(eval(weightloss/(1)))

    let calories=document.getElementById("totalcal");
    calories.innerText=`${calo} Calories`

    let weight_loss=document.getElementById("loseweight");
    weight_loss.innerText=`${weightloss} KG`

    let weekweightloss=document.getElementById("weekloss");
    weekweightloss.innerText=`3/4 KG`

    let goal_time=document.getElementById("goaldate");
    goal_time.innerText=`${goaltime} WEEK`
}
else if(gender[0]=="female" && weight[1]=="lb"){
    calo=Math.floor(eval(weight[2]  * 13))
    weightloss=Math.floor(eval(weight[0]-weight[2]));

    goaltime=Math.floor(eval(weightloss/(0.75*7)))

    let calories=document.getElementById("totalcal");
    calories.innerText=`${calo} Calories`

    let weight_loss=document.getElementById("loseweight");
    weight_loss.innerText=`${weightloss} KG`

    let weekweightloss=document.getElementById("weekloss");
    weekweightloss.innerText=`3/4 KG`

    let goal_time=document.getElementById("goaldate");
    goal_time.innerText=`${goaltime} WEEK`
}
else if(gender[0]=="female" && weight[1]=="lb"){
    calo=Math.floor(eval(weight[2]  * 13))
    weightloss=Math.floor(eval(weight[0]-weight[2]));

    goaltime=Math.floor(eval(weightloss/(0.75*7)))

    let calories=document.getElementById("totalcal");
    calories.innerText=`${calo} Calories`

    let weight_loss=document.getElementById("loseweight");
    weight_loss.innerText=`${weightloss} KG`

    let weekweightloss=document.getElementById("weekloss");
    weekweightloss.innerText=`3/4 KG`

    let goal_time=document.getElementById("goaldate");
    goal_time.innerText=`${goaltime} WEEK`
}

let btn=document.getElementById("getloose");
btn.onclick=()=>{
    window.location.replace("createaccount.html")
}