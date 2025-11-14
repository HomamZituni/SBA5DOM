// Global array for posts to act as database for project
let posts = [];

// Define Elements for DOM

const formElement = document.getElementById("post-form")
const titleElement = document.getElementById("title")
const contentElement = document.getElementById("content")
const titleErrorElement = document.getElementById("title-error")
const contentErrorElement = document.getElementById("content-error")
const postsContainerElement = document.getElementById("posts-container")

// Pre-Load Saved Posts
const currentPosts = localStorage.getItem("posts");
if (currentPosts !== null) {
posts = JSON.parse(currentPosts); 
}

// Render Posts
function renderPosts() {
postsContainerElement.innerHTML="";
posts.forEach(post => { const postDiv= document.createElement("div"); postDiv.classList.add("post");

const postTitle= document.createElement("h2");
postTitle.textContent= post.title;

const postContent = document.createElement("p");
postContent.textContent = post.content; 

const editButton= document.createElement("button")
editButton.textContent = "Edit";
editButton.ClassList.add("edit");


const deleteButton= document.createElement("button")
deleteButton.textContent= "Delete";
deleteButton.ClassList.add("delete");

postDiv.appendChild(postTitle);
postDiv.appendChild(postContent);
postDiv.appendChild(editButton);
postDiv.appendChild(deleteButton);

postsContainerElement.appendChild(postDiv);
}); }



// Add a New Post

// Delete a Post

// Edit a Post








