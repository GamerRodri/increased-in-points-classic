let prestigeRequirement = 1000000 
let fullPrestigeReq = 0
let prMulti = 1

setInterval(function() {
if (points >= prestigeRequirement) {
    document.querySelector("#prestige").style.display = "block";
} else {
    document.querySelector("#prestige").style.display = "none";
}
fullPrestigeReq = points - prestigeRequirement  
document.querySelector("#prestige-amount").textContent = abv((fullPrestigeReq / 2500).toFixed(2));
}, 10);

////////////////////////////////////
///////// UPGRADES GO HERE /////////
////////////////////////////////////

// Upgrade costs go here
let prUpgradeCost1 = 10
let prAmountBought1 = 0

document.querySelector("#pr-upgrade1").addEventListener("click", () => {
    if (prestigePoints >= prUpgradeCost1) {
      prestigePoints -= prUpgradeCost1;
      prMulti++;
      prUpgradeCost1 *= 1.6;
      prAmountBought1++;
    }
});

// Update text ( for prestige tab )
setInterval(function() {
    document.querySelector("h2#prestige").textContent = abv(prestigePoints.toFixed(2));
    document.querySelector("#prUpgradeCost1").textContent = abv(prUpgradeCost1.toFixed(2));
    document.querySelector("#prAmountBought1").textContent = prAmountBought1;
}, 0);
