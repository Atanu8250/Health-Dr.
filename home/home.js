import navbar from '../Components/navbar.js'
let nav_div=document.getElementById('navbar')
nav_div.innerHTML=navbar()


// document.getElementById('clicks').addEventListener('click',myfun)
// function myfun(){
//     let divs=document.getElementById('content')
//      divs.classList.toggle('show')

//   }
//   window.onclick=function(event){
//     if(!event.target.matches('#clicks')){
//        let remove= document.getElementById('content')
//        if(remove.classList.contains('show')){
//         remove.classList.remove('show')
//        }
//     }
//   }

let lunch_data=[
   {
      img:'',
      name:'Break Fast'
   },
   {
      img:'',
      name:'Lunch'
   },
   {
      img:'',
      name:'Dinner'
   },
   {
      img:'',
      name:'Snacks'
   },
]

let add_food=document.getElementById('add_food')
add_food.onclick=()=>{
   lunch(lunch_data)
}

let food=document.getElementById('food')
//lunch(lunch_data)
function lunch(data){
   // let table=document.createElement('table')
   // let t_head=document.createElement('thead')
   food.innerHTML=null
   data.forEach(function(el){
      console.log(el.name)
      let t_body=document.createElement('tbody')
   let tr=document.createElement('tr')
   let td=document.createElement('td')
   let div=document.createElement('div')
   let p=document.createElement('p')
   p.innerText=el.name
   div.append(p)
   td.append(div)
   t_body.append(td)
   food.append(t_body)
   })
   
}
//   window.onclick=function(event){
//    //  if(!event.target.matches('#add_food')){
//    //     let remove= document.getElementById('food')
//    //    //  if(remove.classList.contains('show')){
//    //    //   remove.classList.remove('show')
//    //    //  }
//    //    remove.style.display='none'
//    //  }
//    console.log('hlloe jii')
//    let eve=event.target
//   }


// 55555555555555
// window.onclick=()=>{
//    re()
// }
// function re(event){
//    let t=document.getElementById('add_food')
//    let eve=document.getElementById('food')
//    if(!t){
//       eve.style.display='none'
//    }
   

// }