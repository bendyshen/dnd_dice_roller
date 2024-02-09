const diceRoller = function(dice) {
    const parts = dice.split('d');
    const numberOfRolls = parseInt(parts[0], 10);
    const numberPerDice = parseInt(parts[1], 10);
    let ans = 0;
    for (let i = 0; i < numberOfRolls; i++) {
        ans += Math.ceil(Math.random() * numberPerDice);
    }
    return ans;
}

console.log("3d6: " + diceRoller("3d6"));
console.log("10d6: " + diceRoller("10d6"));
console.log("3d12: " + diceRoller("3d12"));
console.log("10d15: " + diceRoller("10d15"));
