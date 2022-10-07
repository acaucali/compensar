$( document ).ready(function() {
    $('.side-nav').toggleClass("open");
    
    $('.leftmenutrigger').on('click', function(e) {
         $('.side-nav').toggleClass("open");
         e.preventDefault();
    });
});