document.addEventListener('DOMContentLoaded', function () {
    var introLogo = document.querySelector('.intro-logo');
    var decouvrir = document.querySelector('.decouvrir');

    fadeIn(introLogo, 1000, function () {
        fadeIn(decouvrir, 1200);
    });
});

function fadeIn(element, duration, callback) {
    var opacity = 0;
    var interval = 20;
    var delta = interval / duration;

    function increaseOpacity() {
        opacity += delta;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(timer);
            if (callback) callback();
        }
    }

    var timer = setInterval(increaseOpacity, interval);
}


/* function for returning a message at the form submission */
function getName(){
    var name = document.getElementById('name').value;
    document.querySelector(".response").innerHTML = "Thank you " + name + ", I'll get back to you as soon as possible!";
}
document.querySelector('#contactForm').addEventListener("submit", function(event){
    event.preventDefault();
    getName() 
});