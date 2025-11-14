// Global array for posts to act as database for project
let posts = [];

// Global variable for tracking edited posts
let editingPostId = null;

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
editButton.classList.add("edit");


const deleteButton= document.createElement("button")
deleteButton.textContent= "Delete";
deleteButton.classList.add("delete");

postDiv.appendChild(postTitle);
postDiv.appendChild(postContent);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("post-buttons");
buttonContainer.appendChild(editButton);
buttonContainer.appendChild(deleteButton);

postDiv.appendChild(buttonContainer);
postsContainerElement.appendChild(postDiv);



// Delete a Post
deleteButton.addEventListener("click", () => { 
posts = posts.filter(p => p.id !== post.id);
localStorage.setItem("posts", JSON.stringify(posts));
renderPosts();
});

// Edit a Post
editButton.addEventListener("click", () => {
editPostId= post.id;
titleElement.value= post.title;
contentElement.value = post.content; 
 });
  });
}

renderPosts();

// Add a New Post
formElement.addEventListener("submit", function(event) {
  event.preventDefault();  

if (titleElement.value === "") { titleErrorElement.textContent= "Title is required"; return;} else { titleErrorElement.textContent= "";}

if (contentElement.value ==="") { contentErrorElement.textContent = "Content is required"; return;} else { contentErrorElement.textContent = "";}

if (editingPostId === null) {
const newPost = {
id: Date.now(),
title: titleElement.value,
content: contentElement.value 
};
posts.push(newPost);
} else {
const postToEdit = posts.find(p => p.id === editingPostId);
postToEdit.title = titleElement.value; 
postToEdit.content = contentElement.value; 
editingPostId= null;
}

localStorage.setItem("posts", JSON.stringify(posts));
renderPosts();

titleElement.value = "";
contentElement.value = "";



})















