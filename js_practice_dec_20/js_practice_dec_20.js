//jQuery display a lightbox
//Create an overlay with the large image

let $overlay = $('<div id="overlay"></div>');
let $image = $("<img>");
let $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    //For verification purposes, fetching the correct attribute:
    let href = $(this).attr("href"); //This refers to the clicked <a>
    console.log(href); //the console developer tools will flash the url

    event.preventDefault(); //This will prevent the flashing of the url
    var imageLocation = $(this).attr("href");
    //Update overlay with the image linked in the link.
    $image.attr("src", imageLocation);

    //Show the overlay
    $overlay.show();

    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

When overlay is clicked
$overlay.click(function() {
    // Hide the overlay.
    $overlay.hide();
});