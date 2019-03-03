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







window.onload=function(){
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
        moneyGain = randomizer(Areas[currentArea].loot.chests[0][1], Areas[currentArea].loot.chests[0][2]);
        player.currency += moneyGain;
        encounterHeader.innerHTML = "You found a " + Areas[currentArea].loot.chests[0][0] + "!";
        encounterHeaderInfo.innerHTML = "You found $" + moneyGain + "!";
        updateGUI();
        setPlayerData();
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


