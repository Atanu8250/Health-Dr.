let userdata=JSON.parse(localStorage.getItem("userdata"));

let login_btn=document.getElementById("loginbtn");
login_btn.onclick=()=>{
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value; 
    userdata.forEach((el)=> {
        if(email=="" || password==""){
            alert("fill details")
        }
        else if(email==el.email && password==el.password){
            alert("logged in")
            window.location.replace("home.html")
        }
    });
    alert("wrong username and password")
}


