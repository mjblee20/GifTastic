
let category;


let queryUrl = "api.giphy.com/v1/gifs/search?&api_key="+api_key+"&limit="+limit+"&q="+category;
let api_key = "Y4LUuV5ksUDR8VN22jCN4naB7QI3OF3X";


// adding new interest categories
$("#submit").on("click", function(event) {
    event.preventDefault();
    // generate more category buttons
    let button = $("<button>");
    let input = $("#interest").val().toLowerCase();
    button.attr("id", input);
    button.text(input);
    $("#interests").append(button);
})

$(document).on("click",".buttons", function(event) {
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        // fill the gif-view with a number of gifs of the category chosen
    
        // create a new div for each individual gif
    
        // each div will have two things in them: rating and gif itself
    });
})