
var playerAttack;
var enemyAttack;


getReturnBtns();
getAreaBtns();


function fightStage(){
    returnBtn = document.getElementsByClassName("returnBtn");


    for (var i = 0; i < areaBtn.length; i++) { //Disable buttons
        areaBtn[i].disabled = true;
        if(returnBtn[i]){
            returnBtn[i].disabled = true;
        }
    }

    topAreaDiv.style.display = "none";

    fightScreen.style.display="inherit";
    enemy.getEnemy();

    encounterHeader.innerHTML = randomEnemy.name; // change the header to the name of the enemy
    encounterHeaderInfo.innerHTML = "Enemy Health: " + randomEnemy.health; // change the enemy health on header
}



attackBtn.addEventListener("click", function(){

    var logCount = 0;

    playerAttack = randomizer(player.atk[0] + player.weapon[2], player.atk[1] + player.weapon[2]);
    enemyAttack = randomizer(randomEnemy.minAttack, randomEnemy.maxAttack)

    randomEnemy.health -= playerAttack;

    if(randomEnemy.health <= 0){
        randomEnemy.health = 0;
        topAreaDiv.style.display = "inherit";
        fightScreen.style.display = "none";


        //Update player info
        xp = randomEnemy.xpDrop; //get the enemies xp drop
        updateInfo(xp);
        moneyGain = randomizer(randomEnemy.minLoot, randomEnemy.maxLoot);
        player.currency += moneyGain;
        
        encounterHeader.innerHTML = "Victory!";
        encounterHeaderInfo.innerHTML = "You gained " + xp + "xp and $" + moneyGain;
        enableButtons();
        setPlayerData();
        // updateGUI();
        
    } else { 
        if (player.health - enemyAttack <= 0){
            player.health = 0;
            encounterHeader.innerHTML = "Defeated!"; // Log Defeat
            encounterHeaderInfo.innerHTML = "Take a potion and come back!"; // change the enemy health on header.        
            

            fightScreen.style.display = "none";

            areasDiv.style.display = "none";
            mmOptions.style.display = "inherit";
            midDiv.style = 'background-image: ""';
            enableButtons();
            setPlayerData();



        } else {

            logger("Enemy attacked and dealt " + enemyAttack + " damage!");
            
            encounterHeaderInfo.innerHTML = "Enemy Health: " + randomEnemy.health; // change the enemy health on header.
        
            logger("You dealt " + playerAttack + " damage!");
            player.health -= enemyAttack;
            setPlayerData();
        }
    }
    updateHealthBar();
    updateGUI();

    while (logCount < fightLog.childElementCount) { /// Clear Fight Log
        
        if(logCount>=3){
            fightLog.childNodes[logCount].style.color = "grey";
            // console.log();
        }
        logCount++
    }
});

function enableButtons(){
    for (var i = 0; i < areaBtn.length; i++) { //Enable buttons
        areaBtn[i].disabled = false;
        if(returnBtn[i]){
            returnBtn[i].disabled = false;
        }
    }
}

function logger(log){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(log));
    fightLog.insertBefore(li, fightLog.children[1]); // preppend log item
}