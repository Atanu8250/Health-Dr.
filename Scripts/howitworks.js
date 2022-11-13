import footer from "../Components/footer.js";

document.querySelector('#footer').innerHTML = footer();


document.querySelector('#topthLogo').onclick = () => {
    window.location.href = 'index.html';
}

document.querySelector('#login').onclick = () => {
    window.location.href = 'login.html';
}

//https://i0.wp.com/loseitblog.com/wp-content/uploads/2018/09/Why-Calories-Matter.png?w=1010&ssl=1
//https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/10/Untitled-design-143.png?w=1010&ssl=1
// https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/03/Untitled-design-207.png?w=1010&ssl=1
function carousel(){
    let img_div=document.createElement("div")
    document.querySelector("#corousels").append(img_div)
    let img_Element=document.createElement("img");
    let para1=document.createElement("p")
    let para2=document.createElement("p")
    let p1="Don't let little slipups like missing the gym or overindulging get you down,just dust yourself off and get back on track right away"
    let p12="-Robbie,52 labs lost"
    let p2="Don't be afraid of foods.Carbs are not your enemy.Fruits are not your enemy cheesecake is not your enemy.Pizza is a weekly thing for me.Just adjust the rest of the day around these higher things"
    let p22="Carla,65 lbs lost"
    let p3="Track track track"
    let p32="Lindsay,82 lbs lost"
    let p4="My favorite things about Lose it! are the simple tracking and badges.The badges are very motivating thing"
    let p42="Ashley,lost 126 lbs with Health-dr"
    let p5="I really like the food/calorie tracker and how easy it is to use.Once I was able to see this and hold myself accountable,it became much easier to lose the weight"
    let p52="Clayton,50 lbs lost"
    let i=0
    let arr=[{imgAddress:"https://assets.loseit.com/website/HIW/advice_robbie.png",pa1:p1,pa2:p12},{imgAddress:"https://assets.loseit.com/website/HIW/advice_carla.png",pa1:p2,pa2:p22},{imgAddress:"https://assets.loseit.com/website/HIW/advice_lindsay.png",pa1:p3,pa2:p32},{imgAddress:"https://assets.loseit.com/website/HIW/advice-free_ashley.png",pa1:p4,pa2:p42},{imgAddress:"https://assets.loseit.com/website/HIW/advice-premium_clayton.png",pa1:p5,pa2:p52}]
     let id=setInterval(()=>{
        // let i=0
        if(i===arr.length){
            // clearTimeout(id)
            i=0
        }
        img_Element.src=arr[i].imgAddress
        para1.textContent=arr[i].pa1
        para2.textContent=arr[i].pa2
        para2.style.color="orange"
        img_div.append(img_Element,para1,para2)
        // console.log(document.querySelector("#corousels").innerHTML)
        i++
    },3000)
}
carousel()

