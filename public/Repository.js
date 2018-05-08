import { Post } from "./Post.js";
import { Comment } from "./Comment.js";
import { Render } from "./Render.js";
import {LocalStorage} from "./LocalStorage.js"
//singleton
class Repository {
    constructor() {

    }
}

Repository.createPost = function (data, city) {
    let post = new Post(data, city)
    Repository.posts.push(post)
    console.log(Repository.posts)
    
}

Repository.createComment = function (text, post) {
    let comment = new Comment(text)
    post.comments.push(comment)
    
}

Repository.getPostsArray = function (postsArray) {
   
    return postsArray
}

Repository.removePost = function (index) {

    for (let i = 0; i < Repository.posts.length; i++) {
        console.log(index)
        if (index === i) {
            
            Repository.posts.splice(i, 1);
            Render.renderPosts(Repository.posts)
          
        }
    }

}

Repository.posts = []

export { Repository };