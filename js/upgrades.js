// Upgrade costs go here
// old code
let upgradeCost1 = 10;
let amountBought1 = 0;
let upgradeCost2 = 50;
let amountBought2 = 0;
let upgradeCost3 = 250;
let amountBought3 = 0;
//0 is to skip javascript's first index number in a table, which is 0
//define tables
let upgradeCosts = [0,10,50,250]
let amountBought = [0,0,0,0]

let ucDef = [0,10,50,250]
let abDef = [0,0,0,0]
// Other variables go here
let automateCount = 0;
let automateMulti = 1;
let pointsPerSecond = 0;

setInterval(function() {
  points += automateCount * automateMulti;
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
        automateCount += 0.01
        pointsPerSecond++
        } else if (i==3) {
          automateMulti += 10
        }
      }
    }
  )
}