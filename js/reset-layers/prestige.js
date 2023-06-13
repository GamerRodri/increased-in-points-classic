let prestigeRequirement = 1000000 
let fullPrestigeReq = 0
let prMulti = 1
let morePrestige = 1
let moreAutoMulti = 1

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
let prUpgradeCosts = [0,10,30,70]
let prAmountBought = [0,0,0,0]

// These variables are permanent and should not change
let prUcDef = [0,10,30,70]
let prAbDef = [0,0,0,0]

setInterval (function() {
  prUcDef = [0,10,30,70]
  prAbDef = [0,0,0,0]
}, 10)
// These variables are permanent and should not change

for (let i=1;i<prUpgradeCosts.length;i++) {
  document.querySelector(`#pr-upgrade${i}`).addEventListener("click", () => {
    if (prestigePoints >= prUpgradeCosts[i]) {
        prAmountBought[i] += 1
        prestigePoints -= prUpgradeCosts[i]
        prUpgradeCosts[i] *= 1.6
      if (i==1) {
        prMulti += cyMulti
      } else if (i==2) {
        morePrestige++
        } else if (i==3) {
        moreAutoMulti++
        }
      }
    }
  )
}

// Update text ( for prestige tab )
setInterval(function() {
    document.querySelector("h2#prestige").textContent = abv(prestigePoints,2);
    for (let i=1;i<prUpgradeCosts.length;i++) {
        document.querySelector(`#prUpgradeCost${i}`).textContent = abv(prUpgradeCosts[i].toFixed(1));
        document.querySelector(`#prAmountBought${i}`).textContent = prAmountBought[i];
    }
}, 10);
