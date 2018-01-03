/* Convert the plain JavaScript code in the app.js file 
to jQuery. Assume the selected element has a class of 
profile-header, and use the jQuery method .hide(). Chain 
some animation effects to the $('.profile-header') 
element. After a delay() of 2 seconds (2000 milliseconds), 
use the fadeIn() method to fade the header in. */

//document.querySelector('.profile-header').style.display = 'none';

$('.profile-header').hide().delay(2000).fadeIn();

// ---------------------------------------------------

$('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post!";

$("#blogTitlePreview").text(title);
$("#blogContentPreview").html(content);

// ---------------------------------------------------
/* Inside the provided click handler in app.js:
Use jQuery’s val() method to get the value of the 
text input with the ID of name-input. Save it to a 
variable named newName. Select the heading text with 
the class of .profile-name. Use jQuery’s text() method 
to set the contents of .profile-name to the value of 
the input field */

$('button').click(function() {
    const newName = $("#name-input").val();

    $(".profile-name").text(newName);

});