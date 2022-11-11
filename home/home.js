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
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JJREFUeNp0lN+O21QQxr855ziJ7ewmq3SBbhcB2jt4hpZH4AaJCx6ivAEXiHvEDVc8B5X6ENxWqoSoWvXPsunuJpvEdmwffraBbi9wFNkez3wz8803xx5/qTydHTw8+mjxVTbLP3fBSzL1l3H3QY5/rGvFtpbirc9to6qsy/M/nv20vd7+Ekbp6NuzB/d/nJ99IcvmctmBlIyl/Z44k40z2WiiWG6xVYoAWTKSar4XN9zL6dHT33948ui3NNy5t3g4O7mnuC8Ub972zs774b2qZLEBslG7vRZlAEQi7xR3a7WbK8Aq5XdPtTg9/sbl0/CJdZ0RoAaA3TVAOyk4QGpZXWCvqKrEh/ckcCvUFoA3O5igdSdls8mZc0kTLZD9YEJLlFWvpO2FzAEeWoDXvC+xb7BBmG9IuJRVK4DBz1MZfs7XbTDfZadcAZbnffmxvOyB1PAvdnAHe90wHN+3VF8CNPaydNJXqeqS75WCBcD2S8X1XjY/kU0nateA3VDhGKJnSc+RGtopIXzTVYEtO8LG+80r4qk6qRX8GDBb99zETSU3nsk5JrWYyo4/lFKmS3uRgLi5kN7S4jrIym6a8Nu1C98+2UPzCLAAstFmfYGWcPj4M+nkjGx3ZD5HW3BHQmpSEwBxL+X/etPrrOdbTH1UDWBu1IGRvVgpHt6VFseQTWWBKpMjReTRKdWazi9TnCaKq+dyqxvZBL9YoO2SjhLIJZujOuev1R5SiRsRijTQjDEyM9oyNwDyi9ibrJEzWnZQFAq6aBiA36OZZS+ziFg1nRKDOB0OhuoFIA3KCjKzAfg7V6tNR2qNFjfn2CKFAPbyT+nydT3sGsMbl08p7FXPlfkUox8WMcIVIo3oLdJui/6qF1BT1v0K71BIWL6R5nN8sQTAqifPKblTf7fRrd5dNiw+7Ud2rkWDTWn938WoKxYiTDLkmg1hASGGPEMeySDS/7kiwW1VsxRbNbTcsTmuOrBUfpIPJ4sDzOdj7pN/qnj/sttgTM8zxdb1I1HWKQzYZTbVaeymN/JsTAeWqntn5roN2R9J/UOrliVoCY9hsFGowmatX0n0fX4Y+wEo7frVe0DvzsP4nyHiE/v+hgNldaXHgYefXzxTuvggfp0dVp8a+2dIo4v+F+TW4To8kZ1xwlulfRGLy3M94jz47m8BBgCLqaBGd6jUcwAAAABJRU5ErkJggg==',
      name:'Break Fast'
   },
   {
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9dJREFUeNp8VFuLHEUYPVVd3T3d2z2zt7hjNN4CuokJXhZvYUEUFOODkidfRBBB85R/oCD4F3zw2Qd9Cwo+iUJQULyAF9S4u6BRdrNm07s7s3Pr7rp4qndNgojF1FTN13ynz3e+8404+uLDSZYvnD26+Nyrs4eOLcZRBgGHQIKruXFLf+W35WEYd7AO3AJlufd5sbnypi56X6toauGFe5dee+OBk6ens1AiUoBibiCafLSDHqaCvkfGnpnG0OVN3FrAELDW9rEv9OjjnSg9o/Lu8suHb31oujIGfVMhIpCUAc8a96df4p7WL2irHnRdomcVfpwsY8Usk5wjmENtXHB88Sn8/Nu3ryvZumNOuxYmpQWJwUjBEh2W8gt4pPMdRNyFk3MI6h7m5e941L6L8cDgV/0ky6xhrC/XIopvelBaLe2kAsal3wLDMkRmNnAi/QZCteHCQxDRfHM3cgYxX3hCfgBR7WBUBphMBMbMryoB5XgpR2RDMXVAYSlzpjaRyQLazUDaMUvyr695asYUZsUaZFVgVM8yZtgSNoKgymoi8yIIogPb9KqKDfN6sNW2bxw7oZgzIF6P8QGBJ5SFVZCNsPs9LktJZrVoqDJCzZr+4w/Zxe7QYhqXKPwAQgR8PoYpd6D0Zfw57mJrMIeSb7Z+M62c0AWmkuj1JeqWRKwsbWGxVt6Oz9JTeP7I+2xGgZoNEq5EbLYwqSf4dOsc/hrONP7QRqIyAv096cEEtncFdpUgMwYCbw2Fd7ZfwpUdh6ePfITDU6u0gMBKfwHnL53DJ1fOQNO1dFMTr72kLFtBUxItqQnr9o6mSEJY7NoEbxdn8eHaadycblD4AOuD23B51EWjhqCYzjtb+A9ADOUDgn7xfg+EIbsaStTUfL+zV8dz2BwuNK5XfDYTbTdD5pxnFDfdtc5rqtmAqECVFBAyoutLJGEP7XDAiTT783TD+uen82PkQvSqNkqdo0bC+SugqrSP9ZPfw0UBMlSwHJ1Y7iEkS+GzriFcB3Wsa0xGV00HGybHSMZIiqGf6RhZnMHFCjkV6wSGww3E1K3xy7/pHayIzIZkNbA5QWJEofPNC1U7noZoKWQch5yRLGgh8szw38vrLjn0bZNhoDNaKuYM+26OVlc74dIxmcwjdSMChUhVisizEtfLczfqdgCWmQQdnSKOUtpkaz2YvSXaitPk2c5dx9O0lSNrtdCKEshwikOeXds42Pv3HCai8KoDpzJEX53HeO3iW+LuZx6nDZL7ou6dr8Qzp56YSjKRcEalxP8s/imQ+LByejgpfqh7P12oLsr3/hZgAI+twYXhJAISAAAAAElFTkSuQmCC',
      name:'Lunch'
   },
   {
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BJREFUeNp0VMtuHEUUPfXo13hm5HHwxA4OJFhOIAYheccGESlLNlnzC6z4FBYsWbFFbPiFSFmwAQnxUCTLNmHkePyYGU+/qrqaUzVjbAtRmqvqnu4+99xz7i2x+sGGiqLkedrdfJ6sbOwJGQFoIeCXwPLi9mr9rw3PW5s3k9Pfv/zsQr/QQqinj3affbu9vdfrdVcglYKWElorSI8lRIirZRsH53Fa7rywzuGPP3/54cVPP36hho8//ub93adP4jiGtQ363RSx1ricF+FF21g0BKhqi8ebPdwbZDi/zDHNKxhrURuDbu+t9PR8vCZVevcjITXKyqCsDSSpK1IqDUEIpqTiBzbE4fgST95exSc7Q6zEit9YJjFM2CDrbT6TrROo/J8Max0OR6fYfz2GMQ0ipbE1XENdNajrBhfTEvOyRjcS2FlfQcNKqtKiLA3ZI9KuaduclLfvryNLY+wfvUEcR9TN4fTsEheTHHyHOjl4a4qqJkCFVDt4hHfvDTGZlSGhbi3IymF0PEESaZiawlInpQQNaOC1l0KCOUG3kOcliqKErUo0ZH9wNEZtmawBtHekJtWTegpNJ6NIUaeGISHltZM1Jdjd6pPVAux8mmM2rzGZzyGoq+Nz3RhSLwyBAKcRMkjh/gXzWWMt8eGDVbw3TAhQsKQKB8cFNTTB6YYSGFanLame0KVIi8AqZniGPrJUY+/ROna2etgYaAKVyIsCr/6a4eVvU8xIwtAEw4Q1WWqQiaFTHnnZ875Tw+578/xshtHDAe704yD+wWiGV6/nbCMXmjq8xDJBQO1vRMt/2xtz0y6Gxa834wJ/H8/p5mJ8vDGaKMpr2d4YL4aGsASrw3iEKbkBdLW8nrdGs10AiDC6noTkraUBWYXqfhXAEorejSIk1Essqv0PMJYJDbtgzlEq2GuOZeqTkszoVDsgbSfDTPY7CQHjhR7/szyYB7F5y3Fij7F0TKWHUjJBQqKeWczI2N3xQpNrSZYnURu09fq17PZEAolgXy7EYFO7Oo9VEqpOdIROnCGLEyiB67PM7+76PmjGAU8NTxNOkFISVquJygbperq59WnU6SNLYnQ7HaQJwQgsWXYIudzVIrwjjiNWMoElDd/p1f6vX+lmMvm6/PnlO8ndh5/n6Z21syxDzhkVwO1T9soJlh8MoGYlDZBldVZfHH4nRkff/yPAAEdy2hjdVTspAAAAAElFTkSuQmCC',
      name:'Dinner'
   },
   {
      img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACfElEQVR42q2UzU8TURTF7wo37liwYe+SNXHLngR3snLjP8AWbZEKxoKCLWBiRRMJGIkVIyZEEz+DiZqgNigQMDTYIBShTOej7XRmjve+N21qwkbCJL+8vvPOOdM3b1pajlDTRi/FfvZSjsExyEleemjzEg3upS/AyszA2Xj530hO8tJD2cuUL34ah/Vt6thIPhuhPG1FCMUPQzBCiiHO6lO4Oxn4zj4Q+Gp0dzNKLy4O/Qv7t6IEyvURDl/01DHeRFHOvlYFR16sy7r4GnO5K1y2HSMUnnTXKa/Pq4xv51Fam4P5Ngp7KQXzXT9Kq3NKl0t8jbntfi7bvcpl0x0K631Ub8nagbU4gAOl9SFwLRzOdqq5zbqsi89kv+RE3x3gsr1B3ubdNhQm21BZS6u7lr7eQYE10e1XPQgqJoyHHShn7sN4cFatyyV+yYn3D/fQwXUum2hV+IV1ZTIfd2ptvBX2wkUEVRt+8Rcq36dgpM7ATHfqR8H+mk966DDOpzl6GgYD31UmI9Gs5qI7892AV1FjMdSMZLM+DPbXfMYQl1k3CGaIv7+iPM50O6xhrZWfnUOJMXkuXsGZaddd7DdDn+jk3CTYwgjBW04pk/sxBmdE6zLWPotH/FVel6vK/kYPVW7x3Uc17vMuPiUPgbEJd+F8XVeEvirrsi4+8dfXGHITXJJkEhp/Ka7fTQ74n2PwZtvhTpxClUeZqyLZIvtqmWo4kjfG2xOSevTvtSCQQr7z0b8A/uZf4vAmW1TGH9NIloJxnjBBA2q+0IXgBz/Dwoo+ZRl5rvQGn9+QJ0xQnsEJkJeywRMpu0382j6ipu1rNMz8ZnAMJDcs/7R/AdvSLa8NLenCAAAAAElFTkSuQmCC',
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
     // console.log(el.name)
      let t_body=document.createElement('tbody')
   let tr=document.createElement('tr')
   let td=document.createElement('td')

   let div=document.createElement('div')
   div.setAttribute('class','trigger')
   div.addEventListener('click',function(){
      open()
   })
   let img=document.createElement('img')
   img.style.width='fit-content'
   let p=document.createElement('p')
   img.src=el.img
   p.innerText=el.name
   p.style.marginLeft='10px'
   div.style.display='flex'
   div.style.marginTop='10px'
   div.append(img,p)
   td.append(div)
   t_body.append(td)
   food.append(t_body)
   })
   
}
let exercise=document.getElementById('exercise')
exercise.addEventListener('click',function(){
   open_a()
})
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


const trigger=document.querySelector('.trigger')
const modalwrapper=document.querySelector('.modal_wrapper')
const closeBtn=document.querySelector('.close')
// trigger.addEventListner('click',function(){
//    modalwrapper.classList.add('active')
// })
// trigger.addEventListener('click',function(){
//     modalwrapper.classList.add('active')
// })
function open(){
   modalwrapper.classList.add('active')
}
closeBtn.addEventListener('click',function(){
    modalwrapper.classList.remove('active')
})
// modalwrapper.addEventListener('click',function(e){
//     if(e.target!==this)return;
//   modalwrapper.classList.remove('active')
// })
const modalwrapper_a=document.querySelector('.modal_wrapper_a')
const closeBtn_a=document.querySelector('.close_a')
function open_a(){
   modalwrapper_a.classList.add('active_a')
}
closeBtn_a.addEventListener('click',function(){
   modalwrapper_a.classList.remove('active_a')
})

let aphabet=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
display_alpha(aphabet)
display_alpha_a(aphabet)
function display_alpha(data){
   data.forEach(function(el){
      let div=document.createElement('div')
      let p=document.createElement('p')
      p.innerText=el
      div.append(p)
      document.getElementById('alpha').append(div)
   })
}

function display_alpha_a(data){
   data.forEach(function(el){
      let div=document.createElement('div')
      let p=document.createElement('p')
      p.innerText=el
      div.append(p)
      document.getElementById('alpha_a').append(div)
   })
}



let food_items=[
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/0A7387EAEF176128D7B0539CCA0F2703.cache.png',
      name:'Burger',
      cal:52,
   },
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/2B80E4D9F29AD9C0E2D05A16D776759F.cache.png',
      name:'Pizza'
   },
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/4FF66578489F631936A9E358667F6C74.cache.png',
      name:'Toor Daal'

   },
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/EA8B6AE31A4645C22B70DC64C44257A8.cache.png',
      name:'French Fries'
   },
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/28B520FDFB32C696CB549D7BB95FCA55.cache.png',
      name:'Chicken'
   },
   {
      img:'https://d3hsih69yn4d89.cloudfront.net/web/C35355D4A0E666A6A36171624B6E1B62.cache.png',
      name:'Masala Dosa'

   }
]
display_food_items(food_items)

function display_food_items(data){
   data.forEach(function(el){
      //console.log(el.name)
     // let t_body=document.createElement('tbody')
      let tr=document.createElement('tr')
      tr.setAttribute('class','showCalData')
      
      tr.style.cursor='pointer'
      let td_img=document.createElement('td')
      let div_img=document.createElement('div')
      let img=document.createElement('img')
      let td=document.createElement('td')
      img.src=el.img
      td.innerText=el.name
      td.style.display='flex'
      td.style.alignItems='center'
      div_img.append(img)
      td_img.append(div_img)
      tr.append(td_img,td)
     // t_body.append(tr)
      document.getElementById('data').append(tr)
      tr.addEventListener('click',function(){
         let div_a=document.createElement('div')
         
         div_a.style.width='500px'
         div_a.style.transitionDelay='1s'
         div_a.style.height='300px'
         div_a.style.border='1px solid red'
         div_a.style.margin='auto'
         div_a.style.marginLeft='-28px'
         div_a.style.marginBottom='40px'
         div_a.style.backgroundColor=' rgb(238, 236, 236)'
         
         let l_food=document.createElement('div')
         l_food.setAttribute('class','food_name')
          let img_div_a=document.createElement('div')
          let name_div_a=document.createElement('div')
          let img_a=document.createElement('img')
         let p_a=document.createElement('p')
         img_a.src=el.img
          p_a.innerText=el.name
          img_div_a.append(img_a)
          name_div_a.append(p_a)
          l_food.append(img_div_a,name_div_a)
         div_a.append(l_food)
//console.log(img_a)
         tr.append(div_a)
         img.style.display='none'
         td.style.display='none'
         console.log('ch',el.cal)
         div_a.addEventListener('click',function(){
            tr.innerHTML=""
            console.log('hello')
         })
      })

   })
}
let search1=document.getElementById('search_1')
 search1.onkeyup=()=>{
   search1_a()
 }
//console.log(search1)
function search1_a(){
   let filter=search1.value.toUpperCase()
  // console.log(filter)
   let mytable=document.querySelector('#data')
  let tr= mytable.getElementsByTagName('tr')
  // console.log(tr)
   for(var i=0;i<tr.length;i++){
      let td=tr[i].getElementsByTagName('td')[1];
     // console.log('df',td)
      if(td){
         let textValue=td.textContent ||td.innerHTML;
        // console.log("tr",textValue)
         if(textValue.toLocaleUpperCase().indexOf(filter)>-1){
            tr[i].style.display=''
         }
         else{
            tr[i].style.display='none'
         }
      }
   }
}

// let showCalData_a=document.querySelectorAll('.showCalData')
   
// // showCalData.onclick=()=>{
// //    console.log('hii')
// // }
// function calData(){
   // let div=document.createElement('div')
   // div.style.width='200px'
   // div.style.height='300px'
   // div.style.border='1px solid red'
//    showCalData_a.append(div)
// }