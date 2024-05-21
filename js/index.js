console.log("wow this doesnt work");

$(".q-mark").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-me-container").offset(200).top},
        'slow');
});