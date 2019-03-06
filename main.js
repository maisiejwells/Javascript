import { films } from './starwars/films.js'

const intro = document.querySelector('.starwars')

films.forEach( (film) => {
    let titleElement = document.createElement('h1')
    intro.appendChild(titleElement)
titleElement.textContent = film.title

let crawlElement = document.createElement('h3')
intro.appendChild(crawlElement)
crawlElement.textContent = film.opening_crawl
let lineBreak =document.createElement('hr')
intro.appendChild(lineBreak)
})

console.log(films)
