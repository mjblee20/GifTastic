// adding new interest categories
$("#add").on("click", function(event) {
    console.log("creating buttons");
    event.preventDefault();
    // generate more category buttons
    let button = $("<button>");
    let input = $("#interest").val().toLowerCase();
    button.attr("id", input);
    button.attr("class", "buttons btn btn-success m-1");
    button.text(input);
    $("#interests").append(button);
})

$(document).on("click",".buttons", function(event) {
    $("#gif-view").empty();
    console.log("fetching gifs");
    let category = this.id;
    let limit = 10;
    let api_key = "Y4LUuV5ksUDR8VN22jCN4naB7QI3OF3X";
    let queryUrl = "https://api.giphy.com/v1/gifs/search?&limit="+limit+"&q="+category+"&api_key="+api_key;

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    // fill the gif-view with a number of gifs of the category chosen
    .then(function(response){
        // console.log(response);
        let data = response.data;
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i]);
            let div = $("<div>");
            div.attr("class", "m-2");
            let p = $("<p>");
            p.text("Rating: " + data[i].rating);
            let img = $("<img>");
            img.attr("data-state", "still");
            img.attr("src", data[i].images["fixed_height_still"].url);
            img.attr("class", "gif");
            img.attr("data-still", data[i].images["fixed_height_still"].url);
            img.attr("data-animate", data[i].images["fixed_height"].url);
            div.append(p);
            div.append(img);
            $("#gif-view").append(div);
        }
        
    
        // create a new div for each individual gif
    
        // each div will have two things in them: rating and gif itself
    });
})
$(document).on("click", ".gif", function(event) {
    console.log("changing still <-> animate");
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });