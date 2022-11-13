import footer from "../Components/footer.js";
document.querySelector('#footer').innerHTML = footer();

let btn1=document.getElementById("bt1");
btn1.onclick=()=>{
    let div1=document.getElementById("carouseldiv1");
    let div2=document.getElementById("carouseldiv2");
    let div3=document.getElementById("carouseldiv3");
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    btn1.style.backgroundColor="blue"
    btn2.style.backgroundColor="grey"
    btn3.style.backgroundColor="grey"
    div2.style.display="none";
    div3.style.display="none";
}
let btn2=document.getElementById("bt2");
btn2.onclick=()=>{
    let div1=document.getElementById("carouseldiv1");
    let div2=document.getElementById("carouseldiv2");
    let div3=document.getElementById("carouseldiv3");
    div1.style.display="none";
    btn2.style.backgroundColor="blue"
    btn1.style.backgroundColor="grey"
    btn3.style.backgroundColor="grey"
    div2.style.display="flex";
    div2.style.justifyContent="space-between";
    div3.style.display="none";
}
let btn3=document.getElementById("bt3");
btn3.onclick=()=>{
    let div1=document.getElementById("carouseldiv1");
    let div2=document.getElementById("carouseldiv2");
    let div3=document.getElementById("carouseldiv3");
    div1.style.display="none";
    btn3.style.backgroundColor="blue"
    btn2.style.backgroundColor="grey"
    btn1.style.backgroundColor="grey"
    div2.style.display="none";
    div3.style.display="flex";
    div3.style.justifyContent="space-between";
}

let i=2
let btndiv2=document.getElementById("btndiv2");
btndiv2.onclick=()=>{
    if(i==1){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="flex";
        div2.style.display="none";
        div3.style.display="none";
        i++
    }
    else if(i==2){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="none";
        div2.style.display="flex";
        div3.style.display="none";
        i++
    }
    else if(i==3){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="flex";
        i=1;
    }
}

let btndiv1=document.getElementById("btndiv1");
btndiv1.onclick=()=>{
    if(i==1){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="flex";
        div2.style.display="none";
        div3.style.display="none";
        i=3
    }
    else if(i==2){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="none";
        div2.style.display="flex";
        div3.style.display="none";
        i--
    }
    else if(i==3){
        let div1=document.getElementById("slide1");
        let div2=document.getElementById("slide2");
        let div3=document.getElementById("slide3");
        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="flex";
        i--
    }
}