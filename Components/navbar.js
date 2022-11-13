
const navbar = () => {

    let obj = JSON.parse(localStorage.getItem('loggedinUser'));
    let image = obj.profile || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAErElEQVR42s1a2XbaSBDVW/KS78y8Zn5qTr5jMsEKHhsHHGJjYjDCLEICzA6Sauo2SAEZgbqlnuM+7gNordt1a20bBo9arfbuwXI/lu66X8yKZX+rWM6xWbxtO0nn4ufD7+fukZmQDTJCVsgM2Q3btj+Uqp2/Lr63yCxbxBdqnwxK+V7ICFkhM2Q3GtbwzwIfyEMgc/eCrEKmmZD50Rp+Mkp3nQJemvTCtIKY5dZ2xr7rAgCZr6qdgsE/+sXbrA9rUfmhR/ZwRu7LguqWS9c/O3T5oy1meA1Uj5mkcQWtOUaxYrmq/BV8ZMH+vm5S43lE+2O59mi2WNN0vqLRZEGD0Zx67pSa3RFVH21xP+7NRF2W3dhZuPQKYEWZfvQ8mFDbfqHxbEUU8N9unhq+HwhAN7UuHXMeEnI4BwBkJqjhjucHggVBuhlpaeXRr/Yw0qaC81ADgJeBx+C7jODHgOCj784iW5G2gWMATqqQzwEAVm7FPFcVPq6NRmdEhZQ2EconrQHcCM7e1vvk796eFUAIAnTiKCsMW6sNgDrNzig34fdBwEuZlVZ2Cp0DAM7qAADvVH3sR+71lCZ25+QAwHVe8o3w7XkDCEFYvbGgaRKA2DE5AHhwpd4jzw+0AehzNIeTMNNFankAN/ddWm98bQBG7Jol4kIyAKCNI8ZD4a+RIugCMJ4s2VWnzmpPAzgWwDCzBrCTGuC86dutxkBWuHmiVnesUQOvKXRCHudoMpdYGwg3+kQPLUcbAGjXzMMGThny/dNAG4Dn/kvkRrUBQD4fJWM5A6g1ByJYpkwn5HOh0BONp/kGM6SlcM+l+44ImLkASHoIXmDnnE5gtJk+cBJac6GQRqh7kZHmCaA7mMrwX41CxZ2H+Lf6TIvlJteUejpfb2mqWwM6InKYB12UFUrKtAXEfnqBz8lslSsAq/ci4kyuFEoCB66iAMkDQDjqLZeNuPX/AMBK3bPPDnICAG2ClpLdid8AztEonmaE4R68zdqZQIGETp4p3+j6bQMqzVhRH3AhvlGsD6A+uOKfHNklub/XWtz276X6lPvnAEJVC9tCfibr+w9r4iQAqYt8jpyN9lAaAAZKU7RoFFf/kEJpKrKkLsVdYxC12WQALFYbuuKAaKo3edV7o/veqPbkKGlgsfLoio03TRtFG4CvJbUKLWzBX991srTZXwNIQx2oHCuPF0MAFOIqADZeQJWHnpIRS2vgorzdWcHLLqttps1A7MigwavqgTDgQv8pNfUACHcEMRFo6lwLQ+j5cn0gRLYIvBTNMrE4WQLZ69WGa2uL8rHnTEX3+HA3I78kzvN8UcxgxyekpxkZ9mvj3vt9qAGxAcd+HauNDjRCfB4rnZZOG88jd4xNQoeKnBdBljO5kWMwUneL2KJyrcdV0STidZ4rLQMEA7XGL676sKESOoz4bqrY5OMMsA+DdEZzVmWgfbVlwSBLBRu+77xVbAPENqaL1cVbEfo0vWAnExH4QoPHJr3B5z69VeGPAZlzHY7OYPSvBnzsg+f7n986gDiQrjP9LP7ZA4N/v1/7/ke2ga9BENicozt88dmZdF14PP6Z5t4z19mQkauPPyAzZP8PFQU4K8KSj0sAAAAASUVORK5CYII=";

    let n = obj ? obj.name.split(' ')[0] : 'Username'
    return `
    <div>
        <div>
            <img src="./Images/logo.png" alt="">
            <a href="home.html">Home</a>
            <a href="#">Goals</a>
            <a href="#">Community</a>
            <a href="#">Insights</a>
            <a href="forums.html">Forums</a>
            <a href="appsAndDevices.html">Apps & Devices</a>
            <a href="message.html">Messages</a>
            <a href="#"><span class="material-symbols-outlined">settings</span></a>
        </div>


        <div>
            <a href="#">${n}</a>
            <a href="#">Upgrade</a>
            <a id="signOut">Sign out</a>
            <a href="#"><img src="${image}" alt=""></a>
        </div>
    </div>
    `
}


function singningout() {

    document.querySelector('#signOut').onclick = () => {
        localStorage.removeItem('loggedinUser');
        window.location.href = 'index.html';
    }

}

export {navbar, singningout};
