// function newsApi() {
//     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
//     .then((res) => {return res.json()})
//     .then((data) => {
//         results = data.articles
//         console.log(results)
//     })

// }
// newsApi()


let next = document.querySelector('.next');
next.addEventListener('click',nextButton);


let count = 0
function nextButton() {
   count++ 
   //console.log(count); 
   let increase = `page=${count}`
   //console.log(increase);
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&${increase}`)
    .then((res) => {return res.json()})
    .then((data) => {
        results = data.articles
        let output ="";
        //console.log(results)
        results.forEach(result =>{
        output += `<li> Title: ${result.title}  <br><br> Description: ${result.description} </li>`            
        })

        document.querySelector('.newsFeed').innerHTML = output
    })  
}
nextButton()


////////////////////////////////////////////////////////////////////////////////////////////




let prev = document.querySelector('.prev');
prev.addEventListener('click',prevButton);

function prevButton() {
    count--
    console.log(count);
    
}

// function newsApi() {
//     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// newsApi()

