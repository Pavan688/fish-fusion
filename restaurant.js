const { mongerNewInventory } = require("./fishMonger.js")

console.log(mongerNewInventory)

const restaurantFishes = (mongerFishes) => {
    for (const mongerFish of mongerFishes) {
        mongerFish.amount = mongerFish.amount / 2
    }
    return mongerFishes
}
let restaurantInventory = restaurantFishes(mongerNewInventory)
console.log(restaurantInventory)

const fishMenus = (restaurantObjects) => {
    let htmlMenu = ""
    for (const restaurantObject of restaurantObjects) {
     htmlMenu +=`<h1>Menu</h1> <article class="menu"> <h2>${restaurantObject.species}</h2> <section class="menu_item">${restaurantObject.species} Soup</section> <section class="menu_item">${restaurantObject.species} Sandwich</section> <section class="menu_item">Grilled ${restaurantObject.species}</section> </article>\n`
    }
    return htmlMenu
}
let fishMenu = fishMenus(restaurantInventory)


module.exports = { fishMenu }