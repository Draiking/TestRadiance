$(document).ready(function () {

    $('.openModal').click(function () {
        $(".modal").addClass('fade');
    });

    $('.owl-carousel').owlCarousel({
        items:1,
        dots: true,
        loop: true,
    });

    var email = document.getElementsByClassName('email');

    console.log(email);

});
