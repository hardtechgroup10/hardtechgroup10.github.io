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
        if (Modernizr.mq('(min-width: 992px)')) { //wider than 992px
            $('.top-fix').css({
                'top' : '-' + $('nav').outerHeight() + 'px'
            });
            $('.text-reponsive').css({
                'display' : 'block'
            });
        }else{
            $('.text-reponsive').css({
                'display' : 'none'
            });
            $('.img-reponsive').css({
                'height' : '150px'
            });
        }
        if (Modernizr.mq('(max-width: 767px)')) { 
            $('.top-fix').css({
                'top' : '-' + $('nav').outerHeight() + 'px'
            });
            $('#logo').replaceWith('<img id="logo" class="img-fluid d-block" src="assets/img/logofinished-03.png">');
        } else { //wider than 767px here
            $('.top-fix').css({ //loop through each element with the .top-fix class
                'top' : '-' + $('nav').outerHeight() - $('div#navbar2SupportedContent.show') + 'px' //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
            });
            $('#logo').replaceWith('<img id="logo" class="img-fluid d-block" src="assets/img/logofinished-04.png"> ');
            $('.img-reponsive').css({
                'height' : ''
            });
        }
    }).resize();   // Cause an initial widow.resize to occur
});

function myFunction () {
    window.location.replace("http://stackoverflow.com");
}

// Wait for the page to load first
/* window.onload = function() {

    //Get a reference to the link on the page
    // with an id of "mylink"
    var a = document.getElementById("googleButton");

    //Set code to run when the link is clicked
    // by assigning a function to "onclick"
    a.onclick = function() {

      // Your code here...
      ga('send', 'event', {
        eventCategory: 'button',
        eventAction: 'register',
        transport: 'beacon'
      });

      //If you don't want the link to actually 
      // redirect the browser to another page,
      // "google.com" in our example here, then
      // return false at the end of this block.
      // Note that this also prevents event bubbling,
      // which is probably what we want here, but won't 
      // always be the case.
      return false;
    }
  } */


function googleButton() {
    gtag('event', 'register', {
  'event_category' : 'button',
    });
}