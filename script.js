//firstly all color's score are zero
const score = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
};

//OpeningCeremony() function 
function OpeningCeremony(score, callbackFnc) {
    console.log("Let the games begin");
    setTimeout(() => {
        Race100M(score, callbackFnc);//call another function
    }, 1000);
}

//Race100M function
function Race100M(score, callbackFnc) {
    console.log("Race100M started");
    setTimeout(() => {
        //create new object for time and generate random number between 10 to 15;
        const colorTimes = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };
        //sorting colorTimes
        const sorted = Object.entries(colorTimes).sort((a, b) => a[1] - b[1]);
        // storing first and second 
        const firstColor = sorted[0][0];
        const secondColor = sorted[1][0];
        //show result
        console.log(`Race100M results: ${sorted.map((entry) => `${entry[0]}: ${entry[1]} seconds`).join(", ")}`);

        console.log(`${firstColor} wins 50 points!`);
        console.log(`${secondColor} wins 25 points!`);
        // update score 
        score[firstColor] += 50;
        score[secondColor] += 25;
        console.log("Score updated of Race100M : ", score);
        callbackFnc(score, LongJump);
    }, 3000);
}
//LongJump function
function LongJump(score, callbackFnc) {
    console.log("LongJump started");
    setTimeout(() => {
        const colors = ["red", "yellow", "green", "blue"];
        const winningColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(`${winningColor} wins 150 points!`);
        score[winningColor] += 150;
        console.log("Score updated of LongJump : ", score);
        callbackFnc(score, HighJump);
    }, 2000);
}
  

//HighJump function
function HighJump(score, callbackFnc) {
    console.log("HighJump started");

    const color = prompt("What colour secured the highest jump? (red/yellow/green/blue).....");

    if (color === null || color.trim() === "") {
      console.log("Event was cancelled");
      callbackFnc(score, AwardCeremony);
      return;
    }
    const selectedColor = color.toLowerCase().trim();
    if (score[selectedColor] === undefined) {
      console.log("Wrong colour entered!");
      callbackFnc(score, AwardCeremony);
      return;
    }
    console.log(`${selectedColor} wins 100 points!`);
    score[selectedColor] += 100;
    console.log("Score updated of HighJump : ", score);
    callbackFnc(score, AwardCeremony);
}


//AwardCeremony function 
function AwardCeremony(score) {
    console.log("AwardCeremony started");
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sorted[0][0].toUpperCase()} came first with ${sorted[0][1]} points.`);
    console.log(`${sorted[1][0].toUpperCase()} came second with ${sorted[1][1]} points.`);
    console.log(`${sorted[2][0].toUpperCase()} came third with ${sorted[2][1]} points.`);
}



//calling OpeningCeremony function...
OpeningCeremony(score, Race100M);
  