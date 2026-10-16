//Create a stopwatch object that has four properties and three methods

let stopwatch = {
  shape: "round",
  color: "black",
  brand: "lexus",
  model: "fiesta",
  startTime: function () {
    console.log("start");
  },
  pauseTime: (pause) => {
    console.log(pause);
  },
  resetTime: function () {
    console.log("reset");
  },
};

console.log(stopwatch);
