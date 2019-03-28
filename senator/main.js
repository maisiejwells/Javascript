import { senators } from './senators.js'
import { representatives } from './representatives.js'

// filter examples

const maleSenators = senators.filter((senator) => {
    return senator.gender === 'M'

})
//console.log(maleSenators)

const femaleSenators = senators.filter((senator) => {
    return senator.gender === 'F'

})

//console.log(femaleSenators)

//map examples

const simpleReps = representatives.map(rep => {
    return {
        name: `${rep.first_name} ${rep.last_name}`,
        party: rep.party
    }
})

const republicans = simpleReps.filter(rep => rep.party === 'R')
const democrats = simpleReps.filter(rep => rep.party === 'D')

console.log(republicans, democrats)

//reduce examples

const testArray = [5, 10, 15, 20, 25, 30, 35, 40]
const testReduce = testArray.reduce((acc, num) => {
return acc + num
}, 0)

const totalVotes = senators.reduce((acc, senator) => {
    return acc + senator.total_votes
}, 0)

const missedVotes = senators.reduce((acc, senator) => {
    return acc + senator.missed_votes
}, 0)

console.log(`Out of ${totalVotes} total votes in the senate, ${missedVotes} of those votes were missed.`)

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
})