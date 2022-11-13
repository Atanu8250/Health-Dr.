let userdata=JSON.parse(localStorage.getItem("userdata")) || [];

let login_btn=document.getElementById("loginbtn");
login_btn.onclick=()=>{
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value; 
    let flag = 0;
    userdata.forEach((el)=> {
        if(email=="" || password==""){
            alert("fill details")
        }
        else if(email==el.email && password==el.password){
            flag = 1;
            alert("logged in")
            localStorage.setItem('loggedinUser', JSON.stringify(el));
            window.location.replace("home.html")
        }
    });

    if(!flag){
        alert('⛔ User not found, please try to sign-up first!')
        window.location.replace("signup.html");
    }
}


