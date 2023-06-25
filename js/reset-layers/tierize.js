let tierizeRequirement = 8000000;
let fullTierizeReq = 0;
let tierizeCount = 0;
let moreTierPoints = 1;
let tierDivision = 1;
let boostMultiplier = 1;
let nxtLvl = 1000 * Math.pow(3, tierLvl - 1) / tierDivision;

setInterval(function() {
  tierPoints += (automateCount * automateMulti / 4)
  tierlvlPoints += (automateCount * automateMulti / 4) * tierizeCount * boostMultiplier
  if (tierlvlPoints >= nxtLvl && nxtLvl < Infinity) {
    tierLvl += 1
    nxtLvl = 1000 * Math.pow(3, tierLvl - 1) / tierDivision
    tierlvlPoints = 0
  }
  if (nxtLvl >= Infinity) {
    document.querySelector(".tier-lvl-status1").textContent = " Maximum Level!"
    document.querySelector(".tier-lvl-status2").textContent = " Maximum Level!"
  }
  if (milestoneAlreadyPicked > 0) {
    if (crystals > tierizeRequirement) {
      document.querySelector("#tierize").style.display = "block";
    } else {
      document.querySelector("#tierize").style.display = "none";
    }
    if (milestones >= 5) {
      fullTierizeReq = crystals - tierizeRequirement
      document.querySelector("#tierize-amount").textContent = abv((fullTierizeReq / 13000).toFixed(0));
    }
  } else {
    document.querySelector("#tierize").style.display = "none";
  }
  if (milestones >= 5) {
    document.querySelector("#tierize-status").textContent = "Tierize and "
  } else {
    document.querySelector("#tierize-status").textContent = "Tierize only once but "
  } 
}, 10);

document.querySelector("button#prestige").addEventListener("click", () => {
    if (tierizeCount >= 1) {
        tierlvlPoints = 0
        tierLvl = 1
        nxtLvl = 1000 * Math.pow(3, tierLvl - 1) / tierDivision
    }
});

////////////////////////////////////
///////// UPGRADES GO HERE /////////
////////////////////////////////////

// Upgrade costs go here
let trUpgradeCosts = [0,500,2000,8000]
let trAmountBought = [0,0,0,0]

// These variables are permanent and should not change
let trUcDef = [0,500,2000,8000]
let trAbDef = [0,0,0,0]

setInterval (function() {
  if (milestones >= 8) {
    trUcDef = [0,250,1000,4000]
  } else {
    trUcDef = [0,500,2000,8000]
  }
  trAbDef = [0,0,0,0]
}, 10)
// These variables are permanent and should not change

for (let i=1;i<trUpgradeCosts.length;i++) {
    document.querySelector(`#tr-upgrade${i}`).addEventListener("click", () => {
      if (tierPoints >= trUpgradeCosts[i]) {
            trAmountBought[i] += 1
            tierPoints -= trUpgradeCosts[i]
            trUpgradeCosts[i] *= (0.6 / upgsDivide) + 1
          if (i==1) {
            moreTierPoints++
          } else if (i==2) {
            tierDivision += 0.2
          } else if (i==3) {
            boostMultiplier += 0.2
          }
        }
      }
    )
  }

// Update text ( for tierize tab )
setInterval(function() {
    document.querySelector("span#tierize-count").textContent = abv(tierizeCount.toFixed(0));
    document.querySelector("span#tierize-multi").textContent = abv((tierizeCount * boostMultiplier).toFixed(1));
    document.querySelector("span#tierize-points").textContent = abv(tierPoints.toFixed(1));
    document.querySelector("span#tierlvl-points1").textContent = abv(tierlvlPoints.toFixed(1));
    document.querySelector("span#tier-lvl1").textContent = abv(tierLvl.toFixed(0));
    document.querySelector("span#tierlvl-req1").textContent = abv(nxtLvl.toFixed(1));
    document.querySelector("span#tierlvl-points2").textContent = abv(tierlvlPoints.toFixed(1));
    document.querySelector("span#tier-lvl2").textContent = abv(tierLvl.toFixed(0));
    document.querySelector("span#tierlvl-req2").textContent = abv(nxtLvl.toFixed(1));
    for (let i=1;i<trUpgradeCosts.length;i++) {
        document.querySelector(`#trUpgradeCost${i}`).textContent = abv(trUpgradeCosts[i].toFixed(2));
        document.querySelector(`#trAmountBought${i}`).textContent = trAmountBought[i];
    }
}, 10);

