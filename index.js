const fifaData = require('./fifa')
// console.log(fifaData);

// console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 


(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let year2014 = fifaData.filter((team) => {
    return team.Year === 2014 && team.Stage === "Final";
    // return team.Stage === "Final";
});

console.log(year2014);
console.log(year2014[0]["Home Team Name"]);
console.log(year2014[0]["Away Team Name"]);
console.log(year2014[0]["Home Team Goals"]);
console.log(year2014[0]["Away Team Goals"]);
console.log(year2014[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    /* code here */
    let finalDatas = fifaData.filter((team) => {
        return team.Stage === "Final";
    });
                return finalDatas;
};

console.log(getFinals());



// /* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    /* code here */
    let yearsData = callback.map((team) => {
        return {Year: team.Year};
    });
            return yearsData;
}

  console.log(getYears(getFinals()));




/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    /* code here */
    let winner = callback.map((team) => {
        if(team["Away Team Goals"] > team["Home Team Goals"]) {
            return team["Away Team Name"];
        } else {
            return team["Home Team Name"];
        }
    });
            return winner;
}

console.log(getWinners(getFinals()));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(result, winyear) {
    let winners = result.map(
      (team, index) => "In " + winyear[index].Year + ", " + team + " won the World Cup."
    );
    return winners;
  }

  console.log(getWinnersByYear(getWinners(getFinals()), getYears(getFinals())));
  


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */
    let home = data.reduce((goals, team) => {
        return goals += team["Home Team Goals"];
    }, 0);

    let away = data.reduce((goals, team) => {
        return goals += team["Away Team Goals"];
    }, 0);

    let average = (home + away) / data.length;

    return Math.round(average);
}

console.log(getAverageGoals(fifaData));



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins() {

    /* code here */
};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
