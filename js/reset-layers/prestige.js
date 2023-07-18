let prestigeRequirement = 1000000 
let fullPrestigeReq = 0
let prMulti = 1
let morePrestige = 1
let moreAutoMulti = 1
let moreResetMulti = 1

setInterval(function() {
if (points > prestigeRequirement) {
    document.querySelector("#prestige").style.display = "block";
} else {
    document.querySelector("#prestige").style.display = "none";
}
fullPrestigeReq = points - prestigeRequirement
document.querySelector("#prestige-amount").textContent = abv(((fullPrestigeReq / 2500) * morePrestige * PPandCrystalMulti).toFixed(2), 6);
}, 10);

////////////////////////////////////
///////// UPGRADES GO HERE /////////
////////////////////////////////////

// Upgrade costs go here
let prUpgradeCosts = [0,10,30,70,120]
let prAmountBought = [0,0,0,0,0]

// These variables are permanent and should not change
let prUcDef = [0,10,30,70,120]
let prAbDef = [0,0,0,0,0]

setInterval (function() {
  if (milestones >= 8) {
    prUcDef = [0,5,15,35,60]
  } else {
    prUcDef = [0,10,30,70,120]
  }
  prAbDef = [0,0,0,0,0]
}, 10)
// These variables are permanent and should not change

for (let i=1;i<prUpgradeCosts.length;i++) {
  document.querySelector(`#pr-upgrade${i}`).addEventListener("click", () => {
    if (prestigePoints >= prUpgradeCosts[i]) {
        prAmountBought[i] += 1
        prestigePoints -= prUpgradeCosts[i]
        prUpgradeCosts[i] *= (0.6 / upgsDivide) + 1
      if (i==1) {
        prMulti += cyMulti
      } else if (i==2) {
        morePrestige += 0.06
        } else if (i==3) {
          moreAutoMulti++
        } else if (i==4) {
          moreResetMulti++
        }
      }
    }
  )
}

// Update text ( for prestige tab )
setInterval(function() {
    document.querySelector("h2#prestige").textContent = abv(prestigePoints.toFixed(1), 6);
    for (let i=1;i<prUpgradeCosts.length;i++) {
        document.querySelector(`#prUpgradeCost${i}`).textContent = abv(prUpgradeCosts[i].toFixed(1), 6);
        document.querySelector(`#prAmountBought${i}`).textContent = prAmountBought[i];
    }
}, 10);
