import {LocalStorage} from "./LocalStorage.js"

class Render {
    constructor() {

    }
}

Render.renderPosts = function (postsArray) {
    var $posts = $('.post-container');
    $posts.empty();
    for (let i = 0; i < postsArray.length; i++) {

        var source = $('#post-tamplate').html();
        var template = Handlebars.compile(source);
        var newHTML = template(postsArray[i]);
        $posts.append(newHTML);
    }
}

Render.renderComments = function (post) {
  
    var $posts = $('.post-container');
    var $comments = $posts.find('.comments-container');
    $comments.empty();

    for (let i = 0; i < post.comments.length; i++) {
        var source = $('#comment-tamplate').html();
        var template = Handlebars.compile(source);
        var newHTML = template(post.comments[i]);

        $comments.append(newHTML);
    }
}

export { Render };