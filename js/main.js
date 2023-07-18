/* document.querySelector(".tablinks").addEventListener("click", () => {
  // Save data to localStorage
  localStorage.setItem("points", points);
  localStorage.setItem("upgrades", upgradesPurchased);
  // Other data...
});

// On page load
let points = localStorage.getItem("points"); 
let upgradesPurchased = localStorage.getItem("upgrades");
// Load other data... */

let points = 0;
let multi = 1;
let prestigePoints = 0;
let crystals = 0;
let choiceboardRequirement = 8000000;
let choiceAlreadyPicked = 0;
var milestoneAlreadyPicked = 0;
let tierPoints = 0;
let tierLvl = 1
let tierlvlPoints = 0;
let milestones = 0;
// Reset counts go here
let resetLayerCounts = [0,0,0,0,0];
// Reset counts go here
document.querySelector("#multiplier").textContent = multi;
document.querySelector("#clicker").addEventListener("click", () => {
  if (milestones >= 2) {
    points += multi * milestonePermMulti * (resetLayerCounts[1] + resetLayerCounts[2] + resetLayerCounts[3] + resetLayerCounts[4] * moreResetMulti) * Math.pow(3, tierLvl - 1) * milestoneMulti;
  } else {
    points += multi * milestonePermMulti * Math.pow(2, tierLvl - 1) * milestoneMulti;
  }
  if (tierizeCount > 0) {
    if (milestones >= 9) {
      tierPoints += multi * milestonePermMulti * (resetLayerCounts[1] + resetLayerCounts[2] + resetLayerCounts[3] + resetLayerCounts[4] * moreResetMulti) * milestoneMulti / 4 * moreTierPoints
    } else {
      tierPoints += multi / 4 * moreTierPoints
    }
    tierlvlPoints += (multi * Math.pow(1.5, tierLvl - 1)) / 4 * tierizeCount
  }
});

document.getElementById("Upgrades").style.display = "none";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const cancelButton = document.querySelector('.choices-cancel');
cancelButton.addEventListener('click', () => {
  document.querySelector('.choiceboard-ui').style.animation = 'slideOut 0.5s';
  document.querySelector('.darken').style.display = 'none';
  document.querySelector('.undarken').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.choiceboard-ui').style.display = 'none';
    document.querySelector('.undarken').style.display = 'none'; 
  }, 450);
});

const choiceboardButton = document.querySelector('#choiceboard');
const choiceboard = document.querySelector('.choiceboard-ui');
const overlay = document.createElement('div');
choiceboardButton.addEventListener('click', () => {
  document.querySelector('.choiceboard-ui').style.animation = 'slideIn 0.5s';
  document.body.appendChild(overlay);
  choiceboard.style.display = 'block';
  document.querySelector('.darken').style.display = 'block';
});

// Tablink scripts start here
document.querySelector("#tablink1").addEventListener("click", () => {
  document.querySelector("#points").classList.remove("upgrades-active");
  document.querySelector("#points").style.fontSize = "100px"; 
  document.querySelector("#points").style.marginBottom = "0px";
  document.querySelector("#points").style.display = "block";
});

document.querySelector("#tablink2").addEventListener("click", () => {
  document.querySelector("#points").classList.add("upgrades-active");
  document.querySelector("#points").style.fontSize = "30px";
  document.querySelector("#points").style.marginBottom = "5px";
  document.querySelector("#points").style.display = "block";
});

document.querySelector("#tablink3").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("#credits-header1").style.display = "block";
  document.querySelector("#credits1").style.display = "block";
  document.querySelector("#credits-header2").style.display = "block";
  document.querySelector("#credits2").style.display = "block";
});

document.querySelector("#tablink4").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("#Options").style.display = "block";
});

document.querySelector("#tablink5").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#prestige1").style.display = "block";
  document.querySelector("p#prestige2").style.display = "block";
  document.querySelector("h2#prestige").style.display = "block";
  document.querySelector(".prestige-upgrades").style.display = "block";
  if (milestones >= 3) {
    document.querySelector("#pr-upgrade4").style.display = "inline-block";
  }
});

document.querySelector("#tablink6").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#crystals1").style.display = "block";
  document.querySelector("p#crystals2").style.display = "block";
  document.querySelector("h2#crystals").style.display = "block";
  document.querySelector("#choiceboard").style.display = "block";
  document.querySelector('.crystal-upgrades').style.display = "block";
  if (milestones >= 2) {
    document.querySelector('#cy-upgrade2').style.display = "inline-block";
  } else { document.querySelector('#cy-upgrade2').style.display = "none"; }
  if (milestones >= 10) {
    document.querySelector('#cy-upgrade4').style.display = "inline-block";
  } else { document.querySelector('#cy-upgrade4').style.display = "none"; }
});

document.querySelector("#tablink7").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#tierize").style.display = "block";
  document.querySelector("p#tierize2").style.display = "block";
  document.querySelector("p#tierize3").style.display = "block";
  document.querySelector("#tier2").style.display = "block";
  document.querySelector(".tierize-upgrades").style.display = "block";
});

document.querySelector("#tablink8").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#milestone").style.display = "block";
  for (let i=1;i<milestoneList.length;i++) {
    document.querySelector(`#milestone${i}`).style.display = "block";
  }
});
// Tablink scripts end here

document.querySelector("button#prestige").addEventListener("click", () => {
  // Unlock Prestige tab
  document.querySelector("#tablink5").style.display = "inline-block";
  resetLayerCounts[1]++
  prestigePoints += (fullPrestigeReq / 2500) * morePrestige * PPandCrystalMulti;
  if (milestones >= 6) {
    points -= fullPrestigeReq;
  } else {
    points = 0;
  }
  if (milestones < 7) {
    multi = 1;
    upgradeCosts = ucDef
    amountBought = abDef
    automateCount = 0;
    automateMulti = 1;
  }
});

document.querySelector("button#crystallize").addEventListener("click", () => {
  // Unlock Crystals tab
  document.querySelector("#tablink6").style.display = "inline-block";
  resetLayerCounts[2]++
  crystals += (fullCrystallizeReq / 7500) * moreCrystals * PPandCrystalMulti;
  if (milestones >= 6) {
    prestigePoints -= fullCrystallizeReq;
  } else {
    prestigePoints = 0;
  }
  if (milestones < 6) {
    points = 0;
  }
  if (milestones < 7) {
    multi = 1;
    upgradeCosts = ucDef;
    amountBought = abDef;
    prUpgradeCosts = prUcDef;
    prAmountBought = prAbDef;
    automateCount = 0;
    automateMulti = 1;
  }
});

document.querySelector("#choice1").addEventListener("click", () => {
  document.querySelector('.choiceboard-ui').style.animation = 'slideOut 0.5s';
  document.querySelector('.darken').style.display = 'none';
  document.querySelector('.undarken').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.choiceboard-ui').style.display = 'none';
    document.querySelector('.undarken').style.display = 'none'; 
  }, 450);
  // Unlock Tierize tab
  document.querySelector("#tablink7").style.display = "inline-block";
  if (choiceAlreadyPicked < 1) {
    resetLayerCounts[3]++;
    tierizeCount++;
    milestoneRequirement = milestoneRequirement * 3;
    crystals = 0;
    prestigePoints = 0;
    points = 0;
    multi = 1;
    upgradeCosts = ucDef;
    amountBought = abDef;
    prUpgradeCosts = prUcDef;
    prAmountBought = prAbDef;
    cyUpgradeCosts = cyUcDef;
    cyAmountBought = cyAbDef;
    automateCount = 0;
    automateMulti = 1;
  }
  choiceAlreadyPicked = 1
});

document.querySelector("button#tierize").addEventListener("click", () => {
  // Unlock Tierize tab
  document.querySelector("#tablink7").style.display = "inline-block";
  resetLayerCounts[3]++
  if (milestones >= 5) {
    tierizeCount += fullTierizeReq / 13000
  } else {
    tierizeCount++
  }
  if (milestones >= 5) {
    crystals -= fullTierizeReq;
  } else {
    crystals = 0;
  }
  if (milestones < 6) {
    prestigePoints = 0;
    points = 0;
  }
  if (milestones < 7) {
    multi = 1;
    upgradeCosts = ucDef;
    amountBought = abDef;
    prUpgradeCosts = prUcDef;
    prAmountBought = prAbDef;
    cyUpgradeCosts = cyUcDef;
    cyAmountBought = cyAbDef;
    automateCount = 0;
    automateMulti = 1;
  }
});

document.querySelector('#choice2').addEventListener('click', () => {
  document.querySelector('.choiceboard-ui').style.animation = 'slideOut 0.5s';
  setTimeout(() => {
    document.querySelector('.choiceboard-ui').style.display = 'none';
    document.querySelector('.undarken').style.display = 'none'; 
  }, 450);
  document.querySelector('.unbrighten').style.display = 'none';
  document.querySelector('.brighten').style.display = 'block';
  if (choiceAlreadyPicked < 1) {
    setTimeout(() => {
      // Unlocking and stuff starts here
      document.querySelector('.choiceboard-ui').style.animation = 'slideOut 0.5s';
      document.querySelector('.darken').style.display = 'none';
      document.querySelector('.undarken').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.choiceboard-ui').style.display = 'none';
        document.querySelector('.undarken').style.display = 'none'; 
      }, 450);
      // Lock other tabs
      document.querySelector("#tablink5").style.display = "none";
      document.querySelector("#tablink6").style.display = "none";
      document.querySelector("#tablink7").style.display = "none";
      // Switch back to points tab
      document.querySelector("#tablink1").click();
      // Unlock Milestone tab
      document.querySelector("#tablink8").style.display = "inline-block";
      milestoneAlreadyPicked = 0
      resetLayerCounts[4]++
      milestones += 1
      tierizeRequirement = tierizeRequirement * 3
      tierlvlPoints = 0;
      tierPoints = 0
      crystals = 0;
      prestigePoints = 0;
      points = 0;
      multi = 1;
      upgradeCosts = ucDef;
      amountBought = abDef;
      prUpgradeCosts = prUcDef;
      prAmountBought = prAbDef;
      cyUpgradeCosts = cyUcDef;
      cyAmountBought = cyAbDef;
      trUpgradeCosts = trUcDef;
      trAmountBought = trAbDef;
      automateCount = 0;
      automateMulti = 1;
      // Unlocking and stuff ends here
      document.querySelector('.unbrighten').style.display = 'block';
      document.querySelector('.brighten').style.display = 'none';
    }, 5000);
    setTimeout(() => {
      document.querySelector('.unbrighten').style.display = 'none';
    }, 10000);
  }
  choiceAlreadyPicked = 1;
});

document.querySelector('#milestone').addEventListener('click', () => {
  // Unlocking and stuff starts here
  document.querySelector('.unbrighten').style.display = 'none';
  document.querySelector('.brighten').style.display = 'block';
  setTimeout(() => {
    // Lock other tabs
    if (milestones < 4) {
      document.querySelector("#tablink5").style.display = "none";
      document.querySelector("#tablink6").style.display = "none";
      document.querySelector("#tablink7").style.display = "none";
    }
    // Switch back to points tab
    document.querySelector("#tablink1").click();
    // Unlock Milestone tab
    document.querySelector("#tablink8").style.display = "inline-block";
    resetLayerCounts[4]++
    if (milestones < 2) {
      tierizeCount = 0;
    }
    milestones += 1
    tierlvlPoints = 0;
    tierPoints = 0
    crystals = 0;
    prestigePoints = 0;
    points = 0;
    if (milestones < 7) {
      multi = 1;
      upgradeCosts = ucDef;
      amountBought = abDef;
      prUpgradeCosts = prUcDef;
      prAmountBought = prAbDef;
      cyUpgradeCosts = cyUcDef;
      cyAmountBought = cyAbDef;
    }
    if (milestones < 4) {
      trUpgradeCosts = trUcDef;
      trAmountBought = trAbDef;
      automateCount = 0;
      automateMulti = 1;
    }
    // Unlocking and stuff ends here
    document.querySelector('.unbrighten').style.display = 'block';
    document.querySelector('.brighten').style.display = 'none';
  }, 4990);
  setTimeout(() => {
    document.querySelector('.unbrighten').style.display = 'none';
  }, 9990);
});

setInterval(function() {
  if (resetLayerCounts[3] <= 0 && resetLayerCounts[4] <= 0) {
    if (crystals >= choiceboardRequirement) {
      document.querySelector("#choiceboard").style.display = "block";
    } else {
      document.querySelector("#choiceboard").style.display = "none";
    }
  } else {
    document.querySelector("#choiceboard").style.display = "none";
  }
}, 10);

// Update text
setInterval(function() {  
  for (let i=1;i<upgradeCosts.length;i++) {
    document.querySelector(`#upgradeCost${i}`).textContent = abv(upgradeCosts[i].toFixed(1), 6);
    document.querySelector(`#amountBought${i}`).textContent = amountBought[i]
  }
  document.querySelector("#points").textContent = abv(points.toFixed(1), 6);
  if (milestones >= 9) {
    document.querySelector("span#pps").textContent = abv((automateCount * (automateMulti * Math.pow(3, tierLvl - 1)) * milestoneMulti * 100).toFixed(1), 6);
  } else {
    document.querySelector("span#pps").textContent = abv((automateCount * automateMulti * tierLvl * milestoneMulti * 100).toFixed(1), 6);
  }
  if (milestones >= 2) {
    document.querySelector("#multiplier").textContent = abv((multi * milestonePermMulti * (resetLayerCounts[1] + resetLayerCounts[2] + resetLayerCounts[3] + resetLayerCounts[4] * moreResetMulti) * Math.pow(3, tierLvl - 1) * milestoneMulti).toFixed(multiToFixedChange), 6);
  } else {
    document.querySelector("#multiplier").textContent = abv((multi * milestonePermMulti * Math.pow(2, tierLvl - 1) * milestoneMulti).toFixed(multiToFixedChange), 6);
  }
}, 10);

// Get the radio buttons
let titleStyleRadios = document.querySelectorAll('input[name="titleStyle"]');

// Listen for clicks
titleStyleRadios.forEach(radio => {
  radio.addEventListener('click', () => {
    // Get the value of the clicked radio
    let titleStyle = radio.value;
    
    // Update the title based on selected option
    setInterval(function() {
      if (titleStyle == 1) {
        document.title = 'Increased In Points - ' + abv(points.toFixed(1), 6);
      } else {
        document.title = 'Increased In Points'; 
      }
    }, 10);
    
    // Deselect other radios
    titleStyleRadios.forEach(otherRadio => {
      if (otherRadio != radio) otherRadio.checked = false;
    });
  });
});