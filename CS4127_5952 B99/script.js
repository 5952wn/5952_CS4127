window.onload=function() {
    alert("Welcome to the 99th Precinct! Let's explore Brooklyn Nine-Nine!!!");

};

const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', function(){
   alert("You're already on the Home page!")
});

const navLinks= document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function(){
        const pageName= link.textContent;
        const hoverMessage= document.createElement('span');
        hoverMessage.textContent = 'You are about to visit: ${pageName}';
        hoverMessage.style.position= 'absolute';
        hoverMessage.style.top= '${event.clientY + 10}px';
        hoverMessage.style.left= '${event.clientX + 10}px';
        hoverMessage.style.backgroundColor= '#000';
        hoverMessage.style.color= '#fff';
        hoverMessage.style.padding= '5px';
        hoverMessage.style.borderRadius= '5px';
        hoverMessage.style.fontSize= '0.8em';
        hoverMessage.classList.add('hover-message');
        document.body.appendChild(hoverMessage);

        link.addEventListener('mouseout', function(){
            document.querySelectorAll('.hover-message').forEach(msg=> msg.remove());
        });
    });
});

