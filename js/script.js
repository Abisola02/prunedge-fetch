
let next = document.querySelector('.next');
next.addEventListener('click',nextButton);


let count = 0
function nextButton() {
   count++ 
   //console.log(count); 
   let increase = `page=${count}`
   //console.log(increase);

    let heading = `<h1 class= "text-center display-4 jumbotron"> IROYIN Page ${count}`
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&${increase}`)
    .then((res) => {return res.json()})
    .then((data) => {
        results = data.articles
        let output ="";
        //console.log(results)
        results.forEach(result =>{
        output += `<li class="list-group-item m-4"> Title: ${result.title}  <br><br> Description: ${result.description} </li>`            
        })

        document.querySelector('.newsFeed').innerHTML = output
        document.querySelector('.heading').innerHTML = heading
    })  
}
nextButton()


////////////////////////////////////////////////////////////////////////////////////////////




let prev = document.querySelector('.prev');
prev.addEventListener('click',prevButton);

function prevButton() {
    count--
    //console.log(count);
    if (count > 1){
    let increase = `page=${count}`
    let heading = `<h1 class= "text-center display-4 jumbotron"> IROYIN Page ${count}`
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&${increase}`)
    .then((res) => {return res.json()})
    .then((data) => {
        results = data.articles
        let output ="";
        //console.log(results)
        results.forEach(result =>{
        output += `<li class="list-group-item m-4"> Title: ${result.title}  <br><br> Description: ${result.description} </li>`            
        })

        document.querySelector('.newsFeed').innerHTML = output
        document.querySelector('.heading').innerHTML = heading
    }) 
    
    } else {

        count = 1
    }

}    
prevButton();
