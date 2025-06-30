



const subscribeButton = document.querySelector('.subscribe-button');

const alertElement = document.querySelector('.subscribe-alert');

const btnContainer = document.querySelector('.btn-container');

subscribeButton.addEventListener('click' , () => {
    if (subscribeButton.textContent === 'Subscribe') {
       subscribeButton.textContent = 'Subscribed'; 
       if (alertElement) {
    alertElement.style.opacity = '1';
    setTimeout(() => {
        alertElement.style.opacity = '0';
        }, 3000);
    }

    } else {
      subscribeButton.textContent = 'Subscribe';  
    }

});

if (alertElement) {
     alertElement.addEventListener('click' , () => {
        alert('Thank You For Subscribing!');
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 3000);
     
});
}

btnContainer.addEventListener('click' , () => {
    btnContainer.style.backgroundColor = 'aqua';
});
