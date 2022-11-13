import {navbar, singningout} from '../Components/navbar.js'

document.querySelector('#navbar').innerHTML = navbar();

singningout()

document.querySelector('#friends+div>div>button').onclick = () => {
    document.querySelector('#friends').style.display = 'flex';
}


const displayReplyBox = (i) => {
    document.querySelector('#message>div:nth-child(3)>div').append(document.querySelectorAll('.friend')[i]);
    document.querySelector('#chat').style.display = 'flex';
    document.querySelector('#friends').style.display = 'none';
}


document.querySelectorAll('.friend').forEach((div, index) => {
    div.onclick = () => { displayReplyBox(index) };
})

document.querySelector('#chat>button').onclick = () => {

    let date = new Date();

    let month;

    switch (date.getMonth()) {
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
        case 2:
            month = 'Mar'
            break;
        case 3:
            month = 'Apr'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'Jun'
            break;
        case 6:
            month = 'Jul'
            break;
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sept'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        case 11:
            month = 'Dec'
            break;
    }

    let showDate = `${month} ${date.getDate()} ${date.toLocaleTimeString()}`

    let obj = JSON.parse(localStorage.getItem('loggedinUser'));
    

    let userName = obj.name || 'Username';
    let profile = obj.profile || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

    let div = document.createElement('div')
    div.setAttribute('class', 'chat');
    div.innerHTML = `
    <div>
        <img src="${profile}" alt="User's profile" />
    </div>
    <div>
        <h4>${userName}</h4>
        <p>${document.querySelector('#chat>textarea').value}</p>
        <div><p>${showDate}</p></div>
    </div>
    `
    document.querySelector('#conversation').append(div);

    document.querySelector('#chat>textarea').value = '';
}