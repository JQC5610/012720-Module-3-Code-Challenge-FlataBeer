const beerUrl = 'http://localhost:3000/beers'
let beerGroup = document.getElementsByClassName('list-group')


document.addEventListener('DOMContentLoaded', function(event){



function getBeers(){
    return fetch(beerUrl)
    .then(resp => resp.json())
}


function renderBeers(beer){
    
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerText = beer.name
    beerGroup.appendChild(li)
}


getBeers()
    .then(json => {
        json.forEach(beer => {
            renderBeers(beer)
        })
    })
})
