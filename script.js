$(function(){
    
    $('.intro-logo').animate({opacity: 1}, 1000, function() {
        $('.decouvrir').animate({opacity: 1}, 1200);
    });
                        
});


function getName(){
    var name = document.getElementById('name').value;
    document.querySelector(".response").innerHTML = "Thank you " + name + ", I'll get back to you as soon as possible!";
}
document.querySelector('#contactForm').addEventListener("submit", function(event){
    event.preventDefault();
    getName() 
});