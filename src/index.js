const beerUrl = 'http://localhost:3000/beers'
let beerGroup = document.getElementsByClassName('list-group')
let eachBeer = document.getElementsByClassName('list-group-item')


document.addEventListener('DOMContentLoaded', function(event){


function getBeers(){
    return fetch(beerUrl)
    .then(resp => resp.json())
}


function renderBeers(beer){
    
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerText = beer.name
    console.log(beerGroup)
    beerGroup[0].appendChild(li)
}


getBeers()
    .then(json => {
        json.forEach(beer => {
            renderBeers(beer)
        })
    })

function renderBeerDetail(beer){
    let div = document.createElement('div')
    div.setAttribute('id', 'beer-detail')

    let h1 = document.createElement('h1')
    h1.innerText = beer.name

    let img = document.createElement('img')
    img.src = beer.image_url

    let p = document.createElement('p')
    p.innerText = beer.description

    div.appendChild(h1, img, p)

    beerGroup[0].append(div)
}

getBeers()
    .then(json => {
        json.forEach(beer => {
            renderBeerDetail(beer)
        })
    })



})
