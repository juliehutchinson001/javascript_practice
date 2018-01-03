/* Convert the plain JavaScript code in the app.js file 
to jQuery. Assume the selected element has a class of 
profile-header, and use the jQuery method .hide(). Chain 
some animation effects to the $('.profile-header') 
element. After a delay() of 2 seconds (2000 milliseconds), 
use the fadeIn() method to fade the header in. */

//document.querySelector('.profile-header').style.display = 'none';

$('.profile-header').hide()

$(".profile-header")
    .delay(2000)
    .fadeIn();