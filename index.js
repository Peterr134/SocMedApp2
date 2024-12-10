let namespace1 = document.getElementById("user1")
let namespace2 = document.getElementById("user2")
let postContent1 = document.getElementById("content1")
let postContent2 = document.getElementById("content2")
let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let comments1 = document.getElementById("comments1")
let comments2 = document.getElementById("comments2")
let toDoList = document.getElementById("todoList")

getData('https://jsonplaceholder.typicode.com/users/' + Math.floor(Math.random() * 8 + 1)).then((x) => {
    namespace2.innerText = x.name;
})

getData('https://jsonplaceholder.typicode.com/users/' + Math.floor(Math.random() * 8 + 1)).then((x) => {
    namespace1.innerText = x.name;
})

getData('https://jsonplaceholder.typicode.com/posts/' + + Math.floor(Math.random() * 50 + 1)).then((x) =>{
    postContent1.innerText = x.body;
})

getData('https://jsonplaceholder.typicode.com/posts/' + + Math.floor(Math.random() * 50 + 1)).then((x) =>{
    postContent2.innerText = x.body;
})

for(var i = 0; i < 5; i++){
    getData('https://jsonplaceholder.typicode.com/comments/' + Math.floor(Math.random() * 8 + 1)).then((x) => {
        let newItem = document.createElement("li")
        newItem.innerHTML = x.body;
        comments1.appendChild(newItem)
    })
}

for(var i = 0; i < 3; i++){
    getData('https://jsonplaceholder.typicode.com/comments/' + Math.floor(Math.random() * 8 + 1)).then((x) => {
        let newItem = document.createElement("li")
        newItem.innerHTML = x.body;
        comments2.appendChild(newItem)
    })
}

for(var i = 0; i < 5; i++){
    getData('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 8 + 1)).then((x) => {
        let newItem = document.createElement("li")
        newItem.innerHTML = x.title;
        toDoList.appendChild(newItem)
    })
}

//Image here doesn't work
if(Math.random() < 0.5){
    console.log("Attempt")
    getData('https://jsonplaceholder.typicode.com/photos/' + Math.floor(Math.random() * 1000 + 1)).then((x) => {
        displayImage(x.url).then((a) =>{
            image1.innerHTML.src = a;
        })
    })
}






async function displayImage(link){
    const response = await fetch(link);
    const blob = await response.blob()
    return URL.createObjectURL(blob);
}


async function getData(link){
    let thing;
    let obj= await fetch(link)
    .then(response => response.json())
    .then((json) =>{
        thing = json;
    });
    return thing;
}