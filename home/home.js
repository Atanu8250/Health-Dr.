import navbar from '../Components/navbar.js'
let nav_div=document.getElementById('navbar')
nav_div.innerHTML=navbar()


document.getElementById('clicks').addEventListener('click',myfun)
function myfun(){
    let divs=document.getElementById('content')
     divs.classList.toggle('show')

  }
  window.onclick=function(event){
    if(!event.target.matches('#clicks')){
       let remove= document.getElementById('content')
       if(remove.classList.contains('show')){
        remove.classList.remove('show')
       }
    }
  }