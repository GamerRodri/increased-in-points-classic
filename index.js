let points = 0;
let multi = 1;
let upgradeCost1 = 10;
document.querySelector("#multiplier").textContent = multi;
document.querySelector("#clicker").addEventListener("click", () => {
  points += multi;
  document.querySelector("#points").textContent = points.toFixed(1);
});

document.querySelector("#upgrade1").addEventListener("click", () => {
  if (points >= upgradeCost1) {
    points -= upgradeCost1;
    document.querySelector("#points").textContent = points.toFixed(1);
    multi++;
    document.querySelector("#multiplier").textContent = multi;
    upgradeCost1 *= 1.6;
    document.querySelector("#upgradeCost1").textContent = upgradeCost1.toFixed(1);
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
  document.querySelector("#points").textContent = points.toFixed(1);
}
