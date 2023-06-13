let crystallizeRequirement = 2500000 
let fullCrystallizeReq = 0
let cyMulti = 1

setInterval(function() {
if (prestigePoints >= crystallizeRequirement) {
    document.querySelector("#crystallize").style.display = "block";
} else {
    document.querySelector("#crystallize").style.display = "none";
}
fullCrystallizeReq = prestigePoints - crystallizeRequirement  
document.querySelector("#crystal-amount").textContent = abv((fullCrystallizeReq / 7500).toFixed(2));
}, 10);

////////////////////////////////////
///////// UPGRADES GO HERE /////////
////////////////////////////////////

// Upgrade costs go here
let cyUpgradeCosts = [0,25]
let cyAmountBought = [0,0]

// These variables are permanent and should not change
let cyUcDef = [0,25]
let cyAbDef = [0,0]

setInterval (function() {
  cyUcDef = [0,25]
  cyAbDef = [0,0]
}, 10)
// These variables are permanent and should not change

for (let i=1;i<cyUpgradeCosts.length;i++) {
    document.querySelector(`#cy-upgrade${i}`).addEventListener("click", () => {
      if (crystals >= cyUpgradeCosts[i]) {
          cyAmountBought[i] += 1
          crystals -= cyUpgradeCosts[i]
          cyUpgradeCosts[i] *= 1.6
        if (i==1) {
          cyMulti++
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
