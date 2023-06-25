console.log("Loading debug tools")
const DebugSystem = {}

DebugSystem.AddPoints = (p) => {
  points += p
}

DebugSystem.AddMulti = (p) => {
  multi += p
}

DebugSystem.AddPrestigePoints = (p) => {
  prestigePoints += p
  resetLayerCounts[1] += 1
  document.querySelector("#tablink5").style.display = "inline-block";
}

DebugSystem.AddCrystals = (p) => {
  crystals += p
  resetLayerCounts[2] += 1
  document.querySelector("#tablink6").style.display = "inline-block";
}

DebugSystem.AddTierize = (p) => {
  choiceAlreadyPicked = 1
  tierizeCount += p
  resetLayerCounts[3] += 1
  document.querySelector("#tablink7").style.display = "inline-block";
}

DebugSystem.AddMilestones = (p) => {
  if (p + milestones >= milestoneList.length) {
    console.error("Milestones cannot exceed the milestone list. Length of milestone list: " + (milestoneList.length - 1))
  } else {
    milestoneAlreadyPicked = 1
    milestones += p
    resetLayerCounts[4] += p
    document.querySelector("#tablink8").style.display = "inline-block";
  }
}
console.log("Debug tools loaded")

