import { people } from './starwars/people.js'
import { planets } from './starwars/planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    //console.log(getLastNumber(person.url))
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        birth_year: person.birth_year,
       imagePath:`https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
    }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {

let personElement = document.createElement('div')
let planetElement = document.createElement('p')
let birthYear = document.createElement('p')
let imageElement = document.createElement('img')

personElement.className = 'box'
personElement.textContent = person.name
planetElement.textContent = person.home
birthYear.textContent = person.birth_year
imageElement.src = person.imagePath

personElement.appendChild(planetElement)
personElement.appendChild(birthYear)
personElement.appendChild(imageElement)
mainContainer.appendChild(personElement)

document.body.appendChild(mainContainer)
})