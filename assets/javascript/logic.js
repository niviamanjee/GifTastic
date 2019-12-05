// // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha"

// // 
// // localStorage.setItem("cartoons", JSON.stringify(cartoons))
// var cartoons = JSON.parse(localStorage.getItem("cartoons"))
// if (!cartoons) {
//     cartoons = ["Tom and Jerry", "Spongebob", "Lilo and Stitch", "Kim Possible", "Rick and Morty"];
// }
// console.log(cartoons)
// var cartoonsFormatted = []
// for (var i = 0; i < cartoons.length; i++) {
//     cartoonsFormatted.push(cartoons[i].toLowerCase());
// }
// // var cartoonFormatted = $("#cartoon-input").val().toString().replace(/ /g, "+");
// // var cartoon = $("#cartoon-input").val();
// //on click function: when find-gif button is clicked, the ajax function is called
// //value of user input is searched in GIPHY API
// //create 2 buttons, one that creates a new button when the user wants to save the search and one that doesnt save

// function createButtons() {
//     console.log("function works")


//     // Deleting the cartoons prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $(".buttons-box").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < cartoons.length; i++) {

//         // Then dynamicaly generating buttons for each movie in the array
//         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//         var a = $("<button>");
//         // Adding a class of movie-btn to our button
//         a.addClass("cartoon-btn");
//         // Adding a data-attribute
//         a.attr("data-name", cartoons[i]);
//         // Providing the initial button text
//         a.text(cartoons[i]);
//         // Adding the button to the buttons-box div
//         $(".buttons-box").append(a);
//         // var cartoonRemove = $("<button>");

//         // cartoonRemove.attr("data-to-do", i);
//         // cartoonRemove.addClass("remove-box");
//         // cartoonRemove.text("x");

//         // a = a.prepend(cartoonRemove);
//     }

// }
// createButtons();
// // var cartoonFormatted = $("#cartoon-input").val().toString().replace(/ /g, "+");
// var cartoon = $("#cartoon-input").val();
// //on click function for button that saves gif search:
// $("#save-gif").on("click", function (event) {
//     event.preventDefault();
//     //var cartoonFormatted = $("#cartoon-input").val().toString().replace(/ /g, "+");
//     var cartoon = $("#cartoon-input").val();
//     var cartoonLowerCase = cartoon.toLowerCase();
//     if (cartoonsFormatted.indexOf(cartoonLowerCase) === -1) {
//         console.log("button works")

//         console.log(cartoon);

//         //receives value of user input
//         var buttonDiv = $("<div>");
//         buttonDiv.addClass("cartoon-btnBox")

//         var b = $("<button>");
//         // var toonRemove = $("<button>");

//         // toonRemove.attr("data-to-do", i);
//         // toonRemove.addClass("remove-box");
//         // toonRemove.text("x");

//         // Append the button to the to do item

//         // Adding a class of movie-btn to our button
//         b.addClass("cartoon-btn");
//         // Adding a data-attribute
//         b.attr("data-name", cartoon);
//         // Providing the initial button text
//         b.text(cartoon);
//         // buttonDiv = buttonDiv.prepend(toonRemove);
//         // Adding the button to the buttons-box div
//         cartoons.push(cartoon.toString());
//         cartoonsFormatted.push(cartoonLowerCase.toString());
//         localStorage.setItem("cartoons", JSON.stringify(cartoons))
//         // pusht to the cartoons formatted with cartoon formatted too
//         $(".cartoon-btnBox").append(toonRemove, b);
//         $(".buttons-box").append(b);

//         for (var i = 0; i < cartoons.length; i++) {

//             // del = del.prepend(b);
//             $(cartoons[i]).append(del);
//         }


//         console.log(cartoons);
//         $("#cartoon-input").val("");
//     }
//     else {
//         alert("This cartoon has already been saved.");
//     }
//     // else if(cartoons[].attr("data-name")=== ""){

//     // }
//     // appendUserButton();
//     // if (!cartoon.inIndexOf(cartoons)) {
//     //     appendUserButton();

//     // }
// })
// //onclick function that retrieves gifs related to the button's value
// $(document).on("click", ".cartoon-btn", function () {
//     console.log(this)
//     var cartoonFormatted = $(this).attr("data-name").toString().replace(/ /g, "+");
//     //how do I get the name of the button, isn't it just .val()?
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonFormatted + "&api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         // console.log(response.data[0].rating);
//         console.log(queryURL);

//         $(".gif-box").empty();

//         for (g = 0; g < response.data.length; g++) {
//             console.log(g);
//             var gifDiv = $("<div>");
//             var image = $("<img>");
//             image.addClass("images");
//             image.attr("src", response.data[g].images.original_still.url);
//             image.attr("src-alt", response.data[g].images.downsized_medium.url)
//             var rating = $("<p>");
//             rating.text("Rating: " + response.data[g].rating)
//             gifDiv.append(image, rating);
//             $(".gif-box").append(gifDiv)
//             console.log(response.data[g].images.original_still.url);
//             // attr("src", response.data[g].images.original_still.url);
//             //dynamically create img tag that holds the image inside the div
//             //which data component am I supposed to retrieve and how do I show it?
//         }

//         $(".images").on("click", function () {
//             console.log(this);

//             var imageInfo = $(this).attr("src")

//             $(this).attr("src", $(this).attr("src-alt"))
//             $(this).attr("src-alt", imageInfo)
//         })


//     })

// })

// // create on click function that removes the button clicked 
// // $(document).on("click", ".remove-box", function () {
// //     alert("remove button clicked!");
// //     localStorage.removeItem(this);
// // })
// //localStorage.removeItem()

// $("#clear-button").on("click", function (event) {
//     event.preventDefault();
//     $(".gif-box").empty();
// })
//     //data-still, data-animate, data-state
//     //.setAttribute




// // localstorage based on key and value ( values is always a string)
// // if you want to store a [] array set the storage you stringfy()
// // when you retrieve from the storage you JSON.parse  you are converting in your array