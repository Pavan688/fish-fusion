const  { boatInventory } = require("./fishingBoat.js")

let InventoryBoat = boatInventory()
//console.log(InventoryBoat)
/* write a function for monger to buy fish 
monger only buys 10 of each fish if the quantity is less than 10 does not buy.
fish is only bought if the fish quantity is over 10 
and only bought if the fish price is less than or equal to 7.50 
*/

const mongerInventory = (boatObjects) => {
    const mongerBought = []
    for (const boatObject of boatObjects) {
        if (boatObject.amount > 9 && boatObject.price < 7.51) {
        mongerBought.push(boatObject)
    }
}
    return mongerBought
} 
let boughtFish = mongerInventory(InventoryBoat)
//console.log(boughtFish)

const mongerHas = (mongerObjects) => {
    for (const mongerObject of mongerObjects) {
        mongerObject.amount = 10
    }
    return mongerObjects
}

let mongerNewInventory = mongerHas(boughtFish)


module.exports = { mongerNewInventory }