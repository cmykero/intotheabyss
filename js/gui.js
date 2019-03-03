var navXP = document.getElementById("navXP");  
var navHealth = document.getElementById("navHealth");  



//WEAPON
var playerEquippedWeapon = document.getElementById("playerEquippedWeapon");  
var playerEquippedWeaponTitle = document.getElementById("playerEquippedWeaponTitle");  
var playerEquippedWeaponDesc = document.getElementById("playerEquippedWeaponDesc");  


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

    playerEquippedWeaponTitle.innerHTML = player.weapon[0];
    playerEquippedWeaponDesc.innerHTML = `Damage: ${player.weapon[2] + player.atk[0]} - ${player.weapon[2] + player.atk[1]}`;


    if(!`img/${player.weapon[0]}.png`){
        playerEquippedWeapon.src = `img/${player.weapon[0]}.png`;
    }
 
    updateHealthBar();
}
