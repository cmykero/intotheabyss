//ARRAYS
// 0 = level, 1 = xp needed to level up, 2 max health for level
var lvl = [
    [0, 10, 50],
    [1, 25, 55],
    [2, 50, 60],
    [3, 90, 65],
    [4, 130, 70],
    [5, 180, 80]

];

let player = {
    name: "Name",
    lvl: 0,
    xp: 0,
        //min,max
    atk: [5, 10],
    health: 50,
    currency: 0,
    weapon: ["Fists", 0, 0],
    enemiesDefeated: 0, // CODE THIS IN
}

//add player bag, for potions and weapons, and items.

var localData = JSON.parse(localStorage.getItem("PlayerData"));

if(localData){
    console.log("Player Data Found");
    retrievePlayerData();
} else {

    setPlayerName();
}

function setPlayerData(){
    console.log("Player Data Updated.")
    localStorage.setItem("PlayerData", JSON.stringify(player));
    player = JSON.parse(localStorage.getItem("PlayerData"));
    updateGUI();
}

function retrievePlayerData(){
    player = localData;
}



function setPlayerName(){
    if(player.name == "Name"){
        var newPlayer = prompt("What is your name traveller?");
        player.name = newPlayer;
    } else{
        var newPlayer = prompt("What is your new name traveller?");
        player.name = newPlayer;
    }
    setPlayerData();

}
// var PlayerData = ;

