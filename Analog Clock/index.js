
function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour + minute / 60) * 30;
    const minuteDeg = (minute + second / 60) * 6;
    const secondDeg = second * 6;

    document.querySelector('.hand.hour').style.transform = 
        `translate(-50%) rotate(${hourDeg}deg)`;
    document.querySelector('.hand.minute').style.transform = 
        `translate(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.hand.second').style.transform = 
        `translate(-50%) rotate(${secondDeg}deg)`;

    
}

setInterval(updateClock, 1000);
updateClock();