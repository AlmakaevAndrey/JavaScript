// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=15', {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json",
//         "QWERTY": "HELLO WORLD!",
//     }
// })
//       .then(response => response.json())
//       .then(posts => renderPosts(posts))

// const renderPosts = (posts) => {
//     posts.forEach(post => {
//         const postContainer = document.createElement("div");
//         const postTitle = document.createElement("h3");
//         const postBody = document.createElement("p");

//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;

//         postContainer.append(postTitle, postBody);
//         document.body.append(postContainer);
//     });
// }

//------------- async, await ----

// const renderPostAsync = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=13');
//         const posts = await response.json();

//     posts.forEach(post => {
//         const postContainer = document.createElement("div");
//         const postTitle = document.createElement("h3");
//         const postBody = document.createElement("p");

//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;

//         postContainer.append(postTitle, postBody);
//         document.body.append(postContainer);
//     });
// }

// renderPostAsync();

// ---------------- Try, catch, finally ------

const renderPostAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=13');
        const posts = await response.json();
    
    posts.forEach(post => {
        const postContainer = document.createElement("div");
        const postTitle = document.createElement("h3");
        const postBody = document.createElement("p");
    
        postTitle.textContent = post.title;
        postBody.textContent = post.body;
    
        postContainer.append(postTitle, postBody);
        document.body.append(postContainer);
    });
    } catch (error) {
        console.log("Пойманная ошибка", error.massage)
    } finally {
        console.log("Финиш процесса")

    }
}

renderPostAsync();