let crystallizeRequirement = 2500000 
let fullCrystallizeReq = 0
let cyMulti = 1
let moreCrystals = 1
let cyIncrease = 0
let cyIncreaseMultiII = 0.002
var multiToFixedChange = 0

setInterval(function() {
if (prestigePoints > crystallizeRequirement) {
    document.querySelector("#crystallize").style.display = "block";
} else {
    document.querySelector("#crystallize").style.display = "none";
}
fullCrystallizeReq = prestigePoints - crystallizeRequirement
document.querySelector("#crystal-amount").textContent = abv(((fullCrystallizeReq / 7500) * PPandCrystalMulti).toFixed(2));
}, 10);

////////////////////////////////////
///////// UPGRADES GO HERE /////////
////////////////////////////////////

// Upgrade costs go here
let cyUpgradeCosts = [0,25,40,80,500]
let cyAmountBought = [0,0,0,0,0]

// These variables are permanent and should not change
let cyUcDef = [0,25,40,80,500]
let cyAbDef = [0,0,0,0,0]

setInterval (function() {
  if (milestones >= 8) {
    cyUcDef = [0,12.5,20,40,250]
  } else {
    cyUcDef = [0,25,40,80,500]
  }
  cyAbDef = [0,0,0,0,0]
}, 10)
// These variables are permanent and should not change

for (let i=1;i<cyUpgradeCosts.length;i++) {
    document.querySelector(`#cy-upgrade${i}`).addEventListener("click", () => {
      if (crystals >= cyUpgradeCosts[i]) {
            cyAmountBought[i] += 1
            crystals -= cyUpgradeCosts[i]
            cyUpgradeCosts[i] *= (0.6 / upgsDivide) + 1
          if (i==1) {
            cyMulti++
          } else if (i==2) {
            moreCrystals += 0.06
          } else if (i==3) {
            cyIncrease += cyIncreaseMultiII
            setInterval (() => {
              if (cyAmountBought[3] >= 1) {
                multi += cyIncrease * cyIncreaseMulti
                multiToFixedChange = 2
              } else {
                multiToFixedChange = 0
              }
            }, 10)
          } else if (i==4) {
            cyIncreaseMultiII += 0.005
          }
        }
      }
    )
  }

// Update text ( for crystallize tab )
setInterval(function() {
    document.querySelector("h2#crystals").textContent = abv(crystals.toFixed(2));
    for (let i=1;i<cyUpgradeCosts.length;i++) {
        document.querySelector(`#cyUpgradeCost${i}`).textContent = abv(cyUpgradeCosts[i].toFixed(2));
        document.querySelector(`#cyAmountBought${i}`).textContent = cyAmountBought[i];
    }
}, 10);
