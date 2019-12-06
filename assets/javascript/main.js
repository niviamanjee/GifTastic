console.log("javascript connected")
//function that searches a cartoon (ajax call)

function searchCartoon(string) {
    console.log(string)
    $(".gif-box").empty();

    var cartoonFormatted = string.toLowerCase().replace(/ /g, "+");
    //how do I get the name of the button, isn't it just .val()?
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonFormatted + "&api_key=UovqLlb4p7IJUDo4ZG5kvECyu8XreRha&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.data[0].rating);
        console.log(queryURL);
        console.log(response)
        // $(".gif-box").empty();

        for (g = 0; g < response.data.length; g++) {
            console.log(g);
            var cardDiv = $("<div>");
            cardDiv.attr("style", "width: 18rem;");
            cardDiv.addClass("card");
            var image = $("<img>");
            image.attr("src", response.data[g].images.original_still.url);
            image.attr("src-alt", response.data[g].images.downsized_medium.url);
            image.addClass("card-img-top")
            var cardBody = $("<div>");
            var rating = $("<p>");
            rating.text("Rating: " + response.data[g].rating)
            cardDiv.append(image, cardBody.append(rating));
            $(".gif-box").append(cardDiv)
            console.log(response.data[g].images.original_still.url);
            // attr("src", response.data[g].images.original_still.url);
            //dynamically create img tag that holds the image inside the div
            //which data component am I supposed to retrieve and how do I show it?
        }

        $(".card-img-top").on("click", function () {
            console.log(this);

            var imageInfo = $(this).attr("src")

            $(this).attr("src", $(this).attr("src-alt"))
            $(this).attr("src-alt", imageInfo)
        })


    })



}

// searchCartoon("Archer");

$("#search-button").on("click", function (event) {
    event.preventDefault();
    var string = $("#cartoon-input").val().toString();
    console.log(string)
    searchCartoon(string);
});

//append a button to the button box
var savedButtons = [];

$("#save-button").on("click", function (event) {
    event.preventDefault();
    var buttonName = $("#cartoon-input").val().toString();

    if (savedButtons.includes(buttonName)) {
        alert("You've already saved this search.")
    }
    else {

        var button = $("<button>");
        button.addClass("cartoonBtn")

        button.text(buttonName)

        $(".buttons-box").append(button);
        savedButtons.push(buttonName);
    }

    // console.log(buttonName)

})

//on click button that searches gif of saved button

$(document).on("click", ".cartoonBtn", function () {
    // var cartoon = this;

    searchCartoon($(this).text().toString());
})

//creating the modal for sign in 
// $(document).ready(function () {


//     $("#signup-button").on("click", function (event) {
//         event.preventDefault();
//         console.log("sign up button works")
//         $('.modal').modal('show');
//     });
// });

//USER AUTHORIZATION 
$("#signup-button").on("click", function (event) {
    event.preventDefault();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result)   /// name, email, user (user use as unique key)
        // create the user on you db
        // then you can use this user to add the object of the topics 
        console.log(user)
        console.log(token)
        // ...

        //create a doc for that user in db 
        // Add a new document in collection "cities"
        db.collection("user").doc(user.displayName).set({
            name: user.displayName,
            email: user.email,
            userId: user.uid,
            savedButtons: []
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }).catch(function (error) {
        console.log("error: ", error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
})

//LOGOUT
$("#logout-button").on("click", function (event) {
    event.preventDefault();
    firebase.auth().signOut(provider);
})
