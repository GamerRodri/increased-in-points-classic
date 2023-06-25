let milestoneRequirement = 8000000;
let fullMilestoneReq = 0;
let milestoneMulti = 1;
let PPandCrystalMulti = 1;
let milestonePermMulti = 1;
let pointsUpgsDivide = 1;
let upgsDivide = 1;
let cyIncreaseMulti = 1;
let milestoneAutomateMulti;

let milestoneList = [0,0,0,0,0,0,0,0,0,0,0];

setInterval(function() {
    if (milestoneAlreadyPicked > 0) {
        if (crystals >= milestoneRequirement) {
            document.querySelector("#milestone").style.display = "block";
        } else {
            document.querySelector("#milestone").style.display = "none";
        }
        if (milestones >= 10) {
            fullMilestoneReq = crystals - milestoneRequirement
        }
    } else {
        document.querySelector("#milestone").style.display = "none";
    }
}, 10);

setInterval(function() {
    if (milestones >= 10) {
        document.querySelector("#milestone-amount1").textContent = abv((fullMilestoneReq / 40000).toFixed(0));
    } else {
        document.querySelector("#milestone-amount1").textContent = "only once"
    }
    if (milestones >= 10) {
        document.querySelector("#milestone-amount2").textContent = "times and you could"
    } else {
        document.querySelector("#milestone-amount2").textContent = "but"
    }
}, 10);

setInterval(function() {
    // Grant the claimed perks
    if (milestones >= 1) {
        milestoneMulti = 15 * milestones
        PPandCrystalMulti = 3 * milestones
        milestonePermMulti = 30
    }
    if (milestones >= 2) {
        pointsUpgsDivide = 2
    }
    if (milestones >= 3) {
        milestonePermMulti = 50
    }
    if (milestones >= 6) {
        milestoneMulti = 35 * milestones
    }
    if (milestones >= 7) {
        cyIncreaseMulti = 4
    }
    if (milestones >= 8) {
        upgsDivide = 2
        pointsUpgsDivide = 3
        milestoneAutomateMulti = 750
    }
    // Turn green when the milestone is unlocked
    for (let i=1;i<milestoneList.length;i++) {
        if (milestones >= i) {
            document.querySelector(`#milestone${i}`).classList.add("unlocked");
        }
    }
}, 10);

// Update text ( for milestone tab )
setInterval(function() {
    document.querySelector("#milestone-count").textContent = abv(resetLayerCounts[4].toFixed(0));
}, 10);
