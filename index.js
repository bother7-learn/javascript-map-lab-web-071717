const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(robot) {
  if (knownDecepticons.indexOf(robot.name) === -1){
      var ally = "autobot"
    } else {
      var ally = "decepticon"
    }
  return Object.assign({}, robot, { name: robot.name, alliance: ally})
})
var coloredZebraStripes = zebraStripes.map(function(stripe) {
  if (zebraStripes.indexOf(stripe) % 2 === 0){
    var col = "black"
  } else{
    var col = "white"
  }
  return Object.assign({}, stripe, { width: stripe.width, color: col})
})
