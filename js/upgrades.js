// Upgrade costs go here
// 0 is to skip javascript's first index number in a table, which is 0
// Define tables
let upgradeCosts = [0,10,50,250]
let amountBought = [0,0,0,0]

// Other variables go here
let automateCount = 0;
let automateMulti = 1;
let pointsPerSecond = 0;

// These variables are permanent and should not change
let ucDef;
let abDef;
// These variables are permanent and should not change

setInterval(function() {
  points += automateCount * automateMulti * multiIncrease;
  // These variables are permanent and should not change
  ucDef = [0,10,50,250]
  abDef = [0,0,0,0]
  // These variables are permanent and should not change
}, 10)

for (let i=1;i<upgradeCosts.length;i++) {
  document.querySelector(`#upgrade${i}`).addEventListener("click", () => {
    if (points >= upgradeCosts[i]) {
        amountBought[i] += 1
        points -= upgradeCosts[i]
        upgradeCosts[i] *= 1.6
      if (i==1) {
        multi += prMulti
      } else if (i==2) {
        automateCount += 0.01 * moreAutoMulti
        } else if (i==3) {
          automateMulti += 10 * moreAutoMulti
        }
      }
    }
  )
}