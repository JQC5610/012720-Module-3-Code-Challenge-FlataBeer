const beerUrl = 'http://localhost:3000/beers'
const individualBeerUrl = `${beerUrl}/id`
// set individual beer Url
// fetch individual beer Url
// render beer detail from individual beer Url
let beerGroup = document.getElementsByClassName('list-group')
const eachBeer = document.getElementsByClassName('list-group-item')


document.addEventListener('DOMContentLoaded', function(event){


function getBeers(){
    return fetch(beerUrl)
    .then(resp => resp.json())
}


getBeers()
    .then(json => {
        json.forEach(beer => {
            renderBeers(beer)
        })
    })



function renderBeers(beer){

    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerText = beer.name
    beerGroup[0].appendChild(li)
    
}


function showBeers(beer){
    return fetch(`individualBeerUrl/${id}`)
    .then(resp => resp.json)
}

function showBeerDetails(beer){
    let div = document.createElement('div')
    div.setAttribute('id', 'beer-detail')

    div.innerHTML = `
    <h1>${beer.name}</h1>
    <img src="${beer.image_url}">
    <h3>${beer.tagline}</h3>
    <p>${beer.description}</p>`
}

showBeers(beer)
    .then()





// function getindividualBeer(){
//     return fetch(individualBeerUrl)
//     .then(resp => resp.json)
        
// }


// let div = document.createElement('div')
//     div.setAttribute('id', 'beer-detail')

//     let h1 = document.createElement('h1')
//     h1.innerText = beer.name

//     let img = document.createElement('img')
//     img.src = beer.image_url

//     let p = document.createElement('p')
//     p.innerText = beer.description

//     div.appendChild(h1)
//     div.appendChild(img)
//     div.appendChild(p)

//     eachBeer[0].append(div)



// function renderBeerDetail(beer){
//     let div = document.createElement('div')
//     div.setAttribute('id', 'beer-detail')

//     let h1 = document.createElement('h1')
//     h1.innerText = beer.name

//     let img = document.createElement('img')
//     img.src = beer.image_url

//     let p = document.createElement('p')
//     p.innerText = beer.description

//     div.appendChild(h1)
//     div.appendChild(img)
//     div.appendChild(p)

//     eachBeer[0].append(div)
// }

// getBeers()
//     .then(json => {
//         json.forEach(beer => {
//             renderBeerDetail(beer)
//         })
//     })

// document.addEventListener('click', function(event){
//     if(event.target.className === 'list-group-item'){
//     eachBeer.style.display = 'block'
//     } else {
//     eachBeer.style.display = 'none'
//     }
// })



})
