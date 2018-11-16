function div_show() {
    document.getElementById('pop_up_form').style.display = "block";
    document.getElementById('overlay').style.display = "block";
}

function div_hide() {
    document.getElementById('pop_up_form').style.display = "none";
    document.getElementById('overlay').style.display = "none";
}

function myFun() {
    if(document.getElementsByClassName("show").length) {
        
    }
}
// Shortcut for $(document).ready()
$(function() {
    // Call on every window resize
    $(window).resize(function(){
        if (Modernizr.mq('(max-width: 767px)')) {
            $('.top-fix').css({
                'top' : '0px'
            });
            $('#logo').replaceWith('<img id="logo" class="img-fluid d-block" src="assets/img/logofinished-03.png">');
        } else {
            $('.top-fix').css({ //loop through each element with the .top-fix class
                'top' : '-' + $('nav').outerHeight() + 'px' //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
            });
            $('#logo').replaceWith('<img id="logo" class="img-fluid d-block" src="assets/img/logofinished-04.png"> ');
        }
    }).resize();   // Cause an initial widow.resize to occur
});
