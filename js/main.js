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
document.querySelector("#multiplier").textContent = multi;
document.querySelector("#clicker").addEventListener("click", () => {
  points += multi * multiIncrease;
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
  document.querySelector(".options-panel").style.display = "flex";
});

document.querySelector("#tablink5").addEventListener("click", () => {
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#prestige1").style.display = "block";
  document.querySelector("p#prestige2").style.display = "block";
  document.querySelector("h2#prestige").style.display = "block";
  document.querySelector(".prestige-upgrades").style.display = "block";
  document.querySelector("h2#prestige").textContent = abv(prestigePoints.toFixed(2));
});

document.querySelector("#tablink6").addEventListener("click", () => {
  document.querySelector("#choiceboard").style.display = "block";
  document.querySelector("#points").style.display = "none";
  document.querySelector("p#crystals1").style.display = "block";
  document.querySelector("p#crystals2").style.display = "block";
  document.querySelector("h2#crystals").style.display = "block";
  document.querySelector(".crystal-upgrades").style.display = "block";
});
// Tablink scripts end here

document.querySelector("button#prestige").addEventListener("click", () => {
  // Unlock Prestige tab
  document.querySelector("#tablink5").style.display = "inline-block";
  prestigePoints += fullPrestigeReq / 2500 
  points = 0;
  multi = 1;
  pointsPerSecond = 0;
  upgradeCosts = ucDef
  amountBought = abDef
  automateCount = 0;
  automateMulti = 1;
});

document.querySelector("button#crystallize").addEventListener("click", () => {
  // Unlock Prestige tab
  document.querySelector("#tablink6").style.display = "inline-block";
  crystals += fullCrystallizeReq / 7500;
  prestigePoints = 0;
  points = 0;
  multi = 1;
  pointsPerSecond = 0;
  upgradeCosts = ucDef;
  amountBought = abDef;
  prUpgradeCosts = prUcDef;
  prAmountBought = prAbDef;
  automateCount = 0;
  automateMulti = 1;
});

// Update text
setInterval(function() {  
  for (let i=1;i<upgradeCosts.length;i++) {
    document.querySelector(`#upgradeCost${i}`).textContent = abv(upgradeCosts[i].toFixed(1));
    document.querySelector(`#amountBought${i}`).textContent = amountBought[i]
  }
  document.querySelector("#points").textContent = abv(points.toFixed(1));
  document.querySelector("span#pps").textContent = abv((automateCount * automateMulti * multiIncrease * 100).toFixed(1));
  document.querySelector("#multiplier").textContent = abv((multi * multiIncrease).toFixed(multiToFixedChange));
  /*
  document.querySelector("#upgradeCost1").textContent = abv(upgradeCosts[1].toFixed(1));
  document.querySelector("#upgradeCost2").textContent = abv(upgradeCosts[2].toFixed(1));
  document.querySelector("#upgradeCost3").textContent = abv(upgradeCosts[3].toFixed(1));
  document.querySelector("#amountBought1").textContent = amountBought[1];
  document.querySelector("#amountBought2").textContent = amountBought[2];
  document.querySelector("#amountBought3").textContent = amountBought[3];
  */
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
        document.title = 'Increased In Points - ' + abv(points.toFixed(1));
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