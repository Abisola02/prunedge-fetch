//FETCH API //////////////////////////////////////////////////////


// function web(){
//     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
//     .then(res => res.json())
//     .then(data => {
//         let datas = data.articles
//         let heading = `<h1 class="jumbotron display-4 text-center">Top News</h1>`;
//         let output=""
//         datas.forEach(data => {
//             output += `<ul class= "list-group m-4" style="width: 100%;">
//                 <li class= "list-group-item"> <bold>Headline:</bold> ${data.title} <br><br> 
//                 <strong>Story:</strong> ${data.description}</li>
//             </ul>`
//         });
//         document.querySelector('.output').innerHTML = output;
//         document.querySelector('.heading').innerHTML = heading;
//     })
// }
// web()


// function Api() {
//     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc6dde98f0564ae8885cde0960b424f3&page=1')
//    .then(res => res.json()) 
//    .then(data =>{
//        console.log(data);
       
//    })
// }
// Api()


// const somethung = { key: "value",some: "thing", numbers: [1,2,3,4,5,6,7,7]}
// console.log(somethung.numbers[2]);

// const names = ["sodiq", "fauziyat", "jacob", "jonson"];

// const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers.splice(3, ));
// console.log(numbers);



//forEach, map() , fillter(), reduce(),


// for (let i =0; i<names.length; i++){
//     console.log(names[i])
// // }

// numbers.filter((number, index) =>{
//     if (index === 6) {
//         console.log(number);
       
//     }
   
// })

// const reducedArray = (initial, acc ) =>{
//     return initial+acc
// }
// console.log(numbers.reduce(reducedArray))

// const number =numbers.reduce((a, b)=> {
//     return a+b;
    
// })

// console.log(number);


// const number = numbers.reduce((a,b)=>{ return ( a+b)})
// console.log(number);
    
// const reducedArray = (a,b)=> {return a+b}

// console.log(numbers.reduce(reducedArray));



















