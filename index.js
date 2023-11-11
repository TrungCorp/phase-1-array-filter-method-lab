// Code your solution here
let counter = 0;
let iterate = 0;
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function findMatching(collection,name)
{
    const output = collection.filter((x) => x.toUpperCase() ===name.toUpperCase())
    return output

}
function fuzzyMatch(collection,search)
{
    const output = collection.filter((x) =>x.startsWith(search,0) )  
    return output
}
function matchName(array,name)
{
    const output = array.filter((x) => x.name === name)
    return output
}
fuzzyMatch(drivers,'Bo')
 