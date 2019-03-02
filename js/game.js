//Get elements
var playerStats = document.getElementById("playerStats");
var sbPlayerName = document.getElementById("sbPlayerName");
var sbPlayerLevel = document.getElementById("sbPlayerLevel");
var sbPlayerXP = document.getElementById("sbPlayerXP");
var playerCurrencyBtn = document.getElementById("playerCurrencyBtn");


//MAIN MENU
var mmOptions = document.getElementById("mmOptions");
var shopDiv = document.getElementById("shopDiv");

//Get Buttons
var exploreBtn = document.getElementById("exploreBtn");
var shopBtn = document.getElementById("shopBtn");


//Fight Screen Elements
var fightScreen = document.getElementById("fightScreen");
var attackBtn = document.getElementById("attackBtn");
var encounterHeader = document.getElementById("encounterHeader");
var fightLog = document.getElementById("fightLog");
var encounterHeaderInfo = document.getElementById("encounterHeaderInfo"); 
var playerWeaponBtn = document.getElementById("playerWeaponBtn"); 




//ARRAYS
// 0 = level, 1 = xp needed to level up, 2 max health for level




window.onload=function(){
    if(player.name == "Name"){
        var newPlayer = prompt("What is your name traveller?");
        player.name = newPlayer;
    }

    updateHealthBar();
    updateGUI();
}

var i = 0;

var exploreDiv = document.getElementById("exploreDiv");
var selectedArea = document.getElementById("selectedArea");

exploreBtn.addEventListener("click", function(){ // If fight button is triggered
    if (player.health == 0){ // Check player health
        alert("You have no health, take a potion then return!");
    } else {
        encounterHeader.innerHTML = "Explore";
        encounterDiv.style.display = "inherit";
        exploreDiv.style.display = "inherit";
        areasDiv.style.display = "inherit";
        mmOptions.style.display = "none";
    }
});


var areaBtn;
getAreaBtns();




shopBtn.addEventListener("click", function(){
    mmOptions.style.display = "none";
    shopDiv.style.display = "inherit";
    encounterDiv.style.display = "inherit";
    encounterHeader.innerHTML = "Shop";
    encounterHeaderInfo.innerHTML = "Select an Item!";
});



var lootChance;
var goldBonus;



//Explore Area
var exploreAreaBtn = document.getElementById("exploreAreaBtn");
var encounterDiv = document.getElementById("encounterDiv");

exploreAreaBtn.addEventListener("click", function(){


    encounterDiv.style.display = "inherit";

    while (fightLog.firstChild) { /// Clear Fight Log
        fightLog.removeChild(fightLog.firstChild);
    }

    lootChance = randomizer(0, 100);

    if (lootChance <= Areas[currentArea].loot.chance){ // check if player gets loot box
        moneyGain = randomizer(Areas[currentArea].loot.chests[1], Areas[currentArea].loot.chests[2]);
        player.currency += moneyGain;
        encounterHeader.innerHTML = "You found a " + Areas[currentArea].loot.chests[0] + "!";
        encounterHeaderInfo.innerHTML = "You found $" + moneyGain + "!";
        updateGUI();
    } else {
        fightStage();
    }
});







function updateInfo(xp){

    if(xp){
        player.xp += xp;
        for(i in lvl){ // Check if the player needs to level up.
            if(i == player.lvl){
                if(player.xp >= lvl[i][1]){
                    player.lvl ++;
                    console.log("LEVEL UP! You are now level: " + player.lvl);
                }
                //update xp progress bar
            }
        }
    }
    updateGUI();
}


var navXP = document.getElementById("navXP");  
var navHealth = document.getElementById("navHealth");  


function updateHealthBar(){
    navHealth.innerHTML = `Health:<br>${player.health} / ${lvl[player.lvl][2]}`
    healthPercent = percentor(player.health, lvl[player.lvl][2]);
    navXP.style.background =`linear-gradient(to right, #7ac781 ${healthPercent}%, #f87f73 ${healthPercent}%)`;
}

function updateGUI(){
    sbPlayerName.textContent ="Name: " + player.name;
    sbPlayerLevel.textContent = "Level: "+ player.lvl;
    sbPlayerXP.textContent = "XP: " + player.xp +  " /"+ lvl[player.lvl][1] ;
    playerCurrencyBtn.innerHTML = `$${player.currency}`;

    // damage = 
    playerWeaponBtn.innerHTML = `Weapon: ${player.weapon[0]} Damage: ${player.weapon[2] + player.atk[0]} - ${player.weapon[2] + player.atk[1]}`
    updateHealthBar();
}
