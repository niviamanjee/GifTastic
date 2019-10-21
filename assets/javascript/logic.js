// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha"

var cartoons = ["Tom and Jerry", "Spongebob", "Lilo and Stitch", "Kim Possible", "Rick and Morty"];


//on click function: when find-gif button is clicked, the ajax function is called
//value of user input is searched in GIPHY API
//create 2 buttons, one that creates a new button when the user wants to save the search and one that doesnt save


//on click function for button that saves gif search:
$("#save-gif").on("click", function (event) {
    console.log("button works")
    event.preventDefault();

    //receives value of user input
    var cartoon = $("#cartoon-input").val();

    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha"

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[0].rating);
        console.log(queryURL);
    });

})



//on click function for button that does not save gif search:
$("#discard-gif").on("click", function (event) {
    console.log("button works")
    event.preventDefault();

    //receives value of user input
    var cartoon = $("#cartoon-input").val().replace(" ", "+");
    // .toString()
    console.log(cartoon);
    //if input has spaces, it has to be concatinated in the url...how do I do this?

    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha"

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

    });

})

//create function that loops through array of cartoons and dynamically creates buttons
function createButtons() {
    console.log("function works")


    // Deleting the cartoons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $(".buttons-box").empty();

    // Looping through the array of movies
    for (var i = 0; i < cartoons.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("cartoon-btn");
        // Adding a data-attribute
        a.attr("data-name", cartoons[i]);
        // Providing the initial button text
        a.text(cartoons[i]);
        // Adding the button to the buttons-box div
        $(".buttons-box").append(a);
    }
}
createButtons();