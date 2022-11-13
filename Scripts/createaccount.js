import { footer2 } from "../Components/footer2.js";
let footer2_div=document.getElementById("footer2");
footer2_div.innerHTML=footer2();


let gender=JSON.parse(localStorage.getItem("gender"));
let weight=JSON.parse(localStorage.getItem("weight"));
let height=JSON.parse(localStorage.getItem("height"));

let userdata= JSON.parse(localStorage.getItem("userdata")) || [];
let get_btn=document.getElementById("btn");
get_btn.onclick=()=>{
    Userdata();
}

const Userdata=()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirm_password").value;
    if(password===confirmpassword){
        let obj={
            name:name,
            email:email,
            password:password,
            confirmpassword:confirmpassword,
            gender:gender[0],
            Current_weight:weight[0],
            Cuurent_weight_unit:weight[1],
            goal_weight:weight[2],
            goal_weight_unit:weight[3],
            height:height[0],
            height_unit:height[1]
        }
        userdata.push(obj);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        window.location.replace("login.html")
    }
    else{
        alert("password wrong")
    }
    
}
