jQuery(document).ready(function () {

    $('.explore-section .hide-img').hide();
    $('.explore-section .hide-img-more').hide();
    $('.explore-section .hidden-btn').hide();

    $('.explore-section #fadeInText').click(function() {
        $('.explore-section .more-btn').hide();
        $('.explore-section .hide-img').show('4000');
        $('.explore-section .hidden-btn').show('4000');

    });

    $('.explore-section #fadeOutText').click(function() {
        $('.explore-section .hide-img-more').show('4000');
        $('.explore-section .hidden-btn').hide('4000');
    });




    $('.featured-boats-section .hide-img').hide();
    $('.featured-boats-section .hide-img-more').hide();
    $('.featured-boats-section .hidden-btn').hide();

    $('.featured-boats-section #fadeImg').click(function() {
        $('.featured-boats-section .more-btn').hide();
        $('.featured-boats-section .hide-img').show('4000');
        $('.featured-boats-section .hidden-btn').show('4000');

    });

    $('.featured-boats-section #fadeMoreImg').click(function() {
        $('.featured-boats-section .hide-img-more').show('4000');
        $('.featured-boats-section .hidden-btn').hide('4000');
    });






});