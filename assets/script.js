// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     // fetches data to thr console
//      console.log(data)
//     })

//     // fetching data for user
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {    
//     data.forEach(user => {
// document.getElementById("users").innerHTML += `<p>${user.name}</p>`
//     })
// })

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {    
    // JSON.stringify(data, filter, indentation_spaces)
    // Using 'null' and '4' formats the raw text with clean visual indents
     data.forEach(user => {
    document.getElementById("users").innerHTML += `<p>${data, null, 4}</p>`
})
})
// .catch(error => console.error("Error fetching data:", error))