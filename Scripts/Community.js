import { navbar, singningout } from '../Components/navbar.js'

document.querySelector('#navbar').innerHTML = navbar();

singningout()

let invitation = document.querySelector(".invitation");
let Activity = document.querySelector(".Activity");
let friend_request = document.querySelector(".friend-request");

let Edit_profile = document.querySelector("#edit_profile");
let edit_picture = document.querySelector(".edit_picture");

// Edit_profile.onclick = () => {
//     window.location.href = ''
// }

document.querySelector('#profile').onclick = () => {
    window.location.replace('Profile.html');
}






let Activity_section = document.querySelector(".activity-section");
let invitation_section = document.getElementById("invitations");
let friend_request_section = document.querySelector(".Friend_request");
let Edit_profile_section = document.querySelector(".Edit_profile");
let Edit_picture_section = document.querySelector(".Edit_picture_section");

const invitations = () => {
    // let Activity_section=document.querySelector(".activity-section");
    Activity_section.style.display = "none";

    // let invitation_section=document.getElementById("invitations");
    invitation_section.style.display = "block";

    Edit_picture_section.style.display = "none";
    friend_request_section.style.display = "none";
    Edit_profile_section.style.display = "none";
}
const activity = () => {
    // let Activity_section=document.querySelector(".activity-section");
    Activity_section.style.display = "block";
    // let invitation_section=document.getElementById("invitations");
    invitation_section.style.display = "none";
    friend_request_section.style.display = "none";
    Edit_profile_section.style.display = "none";
    Edit_picture_section.style.display = "none";


}
const Friend_request = () => {
    Activity_section.style.display = "none";
    invitation_section.style.display = "none"
    friend_request_section.style.display = "block";
    Edit_profile_section.style.display = "none";
    Edit_picture_section.style.display = "none";
}
const Edit_Profile = () => {
    Activity_section.style.display = "none";
    invitation_section.style.display = "none";
    friend_request_section.style.display = "none";

    Edit_picture_section.style.display = "none";
    Edit_profile_section.style.display = "block";
}

const Edit_Picture = () => {
    Activity_section.style.display = "none";
    invitation_section.style.display = "none";
    friend_request_section.style.display = "none";
    Edit_profile_section.style.display = "none";
    Edit_picture_section.style.display = "block";

}



Activity.addEventListener("click", activity);
invitation.addEventListener("click", invitations);
friend_request.addEventListener("click", Friend_request);
Edit_profile.addEventListener("click", Edit_Profile);
edit_picture.addEventListener("click", Edit_Picture);






let save = document.getElementById("save-btn");
const updatedata = () => {
    let data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        location: document.getElementById("location").value,
        phone: document.getElementById("phone").value,
        short: document.getElementById("short").value,
        long: document.getElementById("long").value,
        activities: document.getElementById("activities").value,
        interests: document.getElementById("interests").value,
        website: document.getElementById("website").value,
    }

    let update_profile = [];
    update_profile.push(data);
    localStorage.setItem("update", JSON.stringify(update_profile));
    console.log(data);
}


save.addEventListener("click", updatedata);




let inputimg = document.getElementById("upload");
inputimg.onchange = () => {
    handleimg();
}
let imageurl;
const handleimg = async () => {
    console.log("hello")
    let img = document.getElementById("upload");
    let actual_img = img.files[0];
    // console.log(actimg);
    let form = new FormData();
    form.append('image', actual_img);
    let res = await fetch(`https://api.imgbb.com/1/upload?key=6b71d846d776e2bc4964b28832061c3a`, {
        method: "POST",
        body: form,

    });
    let data = await res.json();
    imageurl = data.data.display_url;
    let imgg = [];
    imgg.push(imageurl);

    let obj = JSON.parse(localStorage.getItem('loggedinUser'));

    obj.profile = imageurl;

    localStorage.setItem("loggedinUser", JSON.stringify(obj));
    console.log("data:", imageurl);
    console.log(imageurl);
}
let uploadimg = document.getElementById("upload_btn");
let imagge = "data:image/png;base64,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"

let obj = JSON.parse(localStorage.getItem('loggedinUser'));

let data = obj.profile || imagge;
document.getElementById("update_img").innerHTML = `<img src=${data} id="uploadimg">`;
const uploadimage = () => {
    let img = document.getElementById("update_img");
    let obj = JSON.parse(localStorage.getItem('loggedinUser'));

    let data = obj.profile || imagge;
    img.innerHTML = `<img src=${data} id="uploadimg">`
    console.log("helloup")
}
uploadimg.addEventListener("click", uploadimage);

