//Get elements
var playerStats = document.getElementById("playerStats");
var sbPlayerName = document.getElementById("sbPlayerName");
var sbPlayerLevel = document.getElementById("sbPlayerLevel");
var sbPlayerXP = document.getElementById("sbPlayerXP");

//Get Buttons
var exploreBtn = document.getElementById("exploreBtn");


//Fight Screen Elements
var fightScreen = document.getElementById("fightScreen");
var attackBtn = document.getElementById("attackBtn");
var enemyHeader = document.getElementById("enemyHeader");
var fightLog = document.getElementById("fightLog");
var enemyHeaderHealth = document.getElementById("enemyHeaderHealth");


//ARRAYS
// 0 = level, 1 = xp needed to level up, 2 max health for level
var lvl = [[0, 20, 50],[1,50, 55],[2,100, 70]];

//enemy, enemy health, enemy attack, xp drop
//0 = name, 1 = enemy health, 2 = min attack, 3 = max attack, 4 = xp drop
var enemies = [["Bat", 15, 2, 4, 2],["Ghoul", 20, 4, 6, 5]];

var weapons = [[1, "Stick", "2"],[2, "Bat"], [3, "Wooden Sword"]]// 


// locations = {
//     cave:{
//         enemies:[],
//         loot:[]
//     },
//     forest:{
//         enemies: [],
//         loot: []
//     }
// }



player = {
    name: "Name",
    lvl: 0,
    xp: 0,
        //min,max
    atk: [5, 10],
    health: 50,
    currentWeapon: 5,
    weaponsList: [1,5]
}




window.onload=function(){
    if(player.name == "Name"){
        var newPlayer = prompt("What is your name traveller?")
        player.name = newPlayer;
    }

    updateHealthBar();
    updateGUI();
}

var i = 0;


//initiate variables
var enemy;
var enemyName;
var enemyHealth;
var li;
var enemyli;
var log;
var enemyLog;
var playerAttack;
var enemyAttack;


exploreBtn.addEventListener("click", function(){ // If fight button is triggered
    while (fightLog.firstChild) { /// Clear Fight Log
        fightLog.removeChild(fightLog.firstChild);
    }

    if (player.health == 0){ // Check player health
        alert("You have no health, take a potion then return!");
    } else {
        exploreBtn.disabled = true;
        attackBtn.disabled = false;
        enemy = randomizer(1, enemies.length);//get random enemy    
        enemy--; // return the value as 0 - enemies.length to be handled by array.
        enemyName = enemies[enemy][0];
        enemyHealth = enemies[enemy][1]//genereate enemy health
        // console.log(enemyHealth)
        enemyHeader.innerHTML = enemyName; // change the header to the name of the enemy
        enemyHeaderHealth.innerHTML = "Enemy Health: " + enemies[enemy][1]; // change the enemy health on header.
    
    
        fightScreen.style.visibility = "visible"; // display fightscreen
    
        li = document.createElement("li");  // create a list item to log
        li.appendChild(document.createTextNode("A " + enemies[enemy][0] + " appeared!")); // write text on log item
        fightLog.appendChild(li); // log the item
        li.textContent = "";
    }
});

attackBtn.addEventListener("click", function(){
    li = document.createElement('li'); // create a new log item
    enemyLi = document.createElement('li'); // create a enemy log item
    playerAttack = randomizer(player.atk[0], player.atk[1]); // Generate player attack

    enemyAttack = randomizer(enemies[enemy][2], enemies[enemy][3]); // Generate enemy attack


    console.log(enemyAttack);
    enemyHealth -= playerAttack;
    if(enemyHealth <= 0){
        enemyHealth = 0;
        enemyHeaderHealth.innerHTML = "Enemy Health: " + enemyHealth; // change the enemy health on header.
        log = document.createTextNode("You defeated the " + enemyName); // write text on log item
        li.appendChild(log); // append log item 
        fightLog.insertBefore(li, fightLog.children[1]);// Log the Win

        //Update player info
        xp = enemies[enemy][4]//get the enemies xp drop
        updateInfo(xp);

        //GUI
        fightScreen.style.visibility = "hidden";        
        attackBtn.disabled = true;
        exploreBtn.disabled = false;
        return;
        
    } else{

        
        if (player.health-enemyAttack <= 0){ // CHECK IF PLAYER IS OUT OF HEALTH

            player.health = 0;
            enemyLog = document.createTextNode("Enemy Dealt  " + enemyAttack + " damage, and ended you! Take a potion and come back!"); // write text on log item
            enemyLi.appendChild(enemyLog); // append log item 
            fightLog.insertBefore(enemyLi, fightLog.children[1]);

            //GUI
            attackBtn.disabled = true;
            exploreBtn.disabled = false;
            fightScreen.style.visibility = "hidden";   

        } else{
            enemyLog = document.createTextNode("Enemy Dealt  " + enemyAttack + " damage!"); // write text on log item
            enemyLi.appendChild(enemyLog); // append log item 
            fightLog.insertBefore(enemyLi, fightLog.children[1]);
    
            enemyHeaderHealth.innerHTML = "Enemy Health: " + enemyHealth; // change the enemy health on header.
            log = document.createTextNode("You dealt " + playerAttack + " damage!"); // write text on log item
            li.appendChild(log); // append log item 
            fightLog.insertBefore(li, fightLog.children[1]);// Log the damage dealt
    
            
    
    
            player.health -= enemyAttack;
        }

        updateHealthBar();
        return;
    }   
});


function updateInfo(xp, health){

    if(xp){
        player.xp += xp;
        for(i=0; i < lvl.length;){ // Check if the player needs to level up.
            if(i == player.lvl){
                if(player.xp >= lvl[i][1]){
                    player.lvl ++;
                    console.log("LEVEL UP! You are now level: " + player.lvl);
                    


                }
                
                //update xp progress bar


            }

            i++;
        }
    }

    updateGUI();

}


var navXP = document.getElementById("navXP");  
var navHealth = document.getElementById("navHealth");  


function updateHealthBar(){
    navHealth.innerHTML = `Health:<br>${player.health} / ${lvl[player.lvl][2]}`
    healthPercent = percenter(player.health, lvl[player.lvl][2]);
    navXP.style.background =`linear-gradient(to right, #7ac781 ${healthPercent}%, #f87f73 ${healthPercent}%)`;
}

function updateGUI(){
    sbPlayerName.textContent ="Name: " + player.name;
    sbPlayerLevel.textContent = "Level: "+ player.lvl;
    sbPlayerXP.textContent = "XP: " + player.xp
}

//randomizer
function randomizer(min,max){ // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

function percenter(percentFor,percentOf){
    return Math.floor(percentFor/percentOf*100);
}