import { Repository } from "./Repository.js"
import { Render } from "./Render.js";

let render = new Render();


var _findPostById = function (id) {
    for (var i = 0; i < Repository.posts.length; i++) {
        if (Repository.posts[i].id === id) {
            return Repository.posts[i];
        }
    }
}


var fetch = function (city) {
    let searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
    return $.ajax({
        method: "GET",
        url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
        dataType: "JSON"
    })
};


var postTheWeather = function (data) {
    let city = $('#input-city').val()
    Repository.createPost(data, city)
    Render.renderPosts(Repository.posts)

}

//on click invoke the function fetch to get weather info of searchet city and then post the weather
$('.btn-get-temp').on("click", function () {
    let city = $('#input-city').val();
    if (city !== "") {
        fetch(city)
            .then(function (response) {
                postTheWeather(response)
            }).catch(function (error) {
                console.log(error);
            });
    } else {
        alert("must enter city")
    }
});


$('.post-container').on("click", '.add-comment', function () {
    let commentText = $(this).siblings('#input-comment').val()
    let thisPostId = $(this).closest('.post').data().id
    let post = _findPostById(thisPostId)

    if (commentText !== "") {
        Repository.createComment(commentText, post)
        Render.renderComments(post)
    } else {
        alert("must enter text to create a comment")
    }

});

$('.post-container').on('click', '.remove', function () {
    var $clickedPost = $(this).closest('.post');
    var index = $clickedPost.index();
    console.log($clickedPost)

    Repository.removePost(index);
});

$( document ).ajaxStart(function() {
    $('.post-container' ).append("<div class="+"loader"+"></div>");
  });



