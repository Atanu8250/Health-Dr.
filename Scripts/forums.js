import {navbar, singningout} from '../Components/navbar.js'

document.querySelector('#navbar').innerHTML = navbar();

singningout()



let forumData = [
    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Announcements',
        text_1: "A forum where we'll post news and announcements.",
        topic: 30,
        messages: 449,
        lastmessage: {
            date: '07/21/2017',
            link_2: "Whitney p",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Fitness and Exercise',
        text_1: "A forum for discussing fitness and exercise.",
        topic: 8600,
        messages: 122271,
        lastmessage: {
            date: '10/18/2022',
            link_2: "katkeeper36",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Diet and Nutrition',
        text_1: "A forum for discussing diet and nutration.",
        topic: 11514,
        messages: 142690,
        lastmessage: {
            date: '10/29/2022',
            link_2: "steven_meyer",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'The Kitchen Sink',
        text_1: "A forum for discussing anything and everything.",
        topic: 9998,
        messages: 159239,
        lastmessage: {
            date: '11/09/2022',
            link_2: "Ns Dad126",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Feature Suggestions',
        text_1: "A forum for feature suggestion and discussion.",
        topic: 5201,
        messages: 22020,
        lastmessage: {
            date: '11/08/2022',
            link_2: "Victor lbarra",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Community-Based Technical Support',
        text_1: "Ask trhe Lose it! community a question! **this is not a fourm Lose it! employees monitor**",
        topic: 9294,
        messages: 35104,
        lastmessage: {
            date: '10/24/2022',
            link_2: "Donald",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'FAQ',
        text_1: "A forum for the most frequently asked questions.",
        topic: 2462,
        messages: 10165,
        lastmessage: {
            date: '11/03/2022',
            link_2: "AI",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },

    {
        Image: 'https://forums.loseit.com/templates/default/images/NewMessageIconLarge.png',
        link_1: 'Teams, Contests, and Fun',
        text_1: "Team threads, contest and other fun activities that might have long running threads.",
        topic: 836,
        messages: 95373,
        lastmessage: {
            date: '11/07/2022',
            link_2: "compchic",
            img: 'https://forums.loseit.com/templates/default/images/icon_latest_reply.gif'
        }
    },
]


const appendForumsData = (data) => {
    data.forEach(({ Image, link_1, text_1, topic, messages, lastmessage: { date, link_2, img } }, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'forum');
        div.innerHTML = `
        <div>
            <div>
                <a href="#">${link_1}</a>
                <p>${text_1}</p>
            </div>
        </div>
        <div>
            <div>
                <p>${topic}</p>
            </div>
            <div>
                <p>${messages}</p>
            </div>
            <div>
                <p>${date}</p>
                <a href="#">${link_2} <span><img src="${img}"/></span></a>
            </div>
        </div>
        `
        document.querySelector('#forums-list').append(div)
    })
}

appendForumsData(forumData)

const whoIsOnlineData = () => {
    document.querySelector('#who-is-online').innerHTML = `
        <div>Who is online</div>
        <div>Our users have posted a total of 587,312 messages<br> There are 2 online users: 2 registered, 0 guest(s) [ Administrator ] [ Moderator ]<br> Most users ever online was <b>6,806</b> on 08/29/2022
        </div>
    `
}

whoIsOnlineData();