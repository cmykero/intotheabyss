

function getReturnBtns(){
    var returnBtn = document.getElementsByClassName("returnBtn");

    for (var i = 0; i < returnBtn.length; i++) {
        returnBtn[i].addEventListener('click', function(){
            mmOptions.style.display = "inherit";
            areasDiv.style.display = "none";
            shopDiv.style.display = "none";
            // exploreDiv.style.display = "none";
            exploreAreaBtn.style.display = "none";
            fightScreen.style.display = "none";
            encounterHeader.innerHTML = " ";
            encounterHeaderInfo.innerHTML = " ";
        });
    }
}


function getAreaBtns(){
    getReturnBtns();
    areaBtn = document.getElementsByClassName("areaBtn");
    midDiv = document.getElementById("midDiv");

    for (var i = 0; i < areaBtn.length; i++) { // loop through all area buttons
        var textContent;
        areaBtn[i].addEventListener('click', function(event){ // add event listeners to area buttons

            currentArea = event.target.innerHTML.toLowerCase(); // Lower case area name to be handled by array
            // 
            topAreaDiv.style.display = "inherit";
            encounterHeaderInfo.innerHTML= " ";
    
    
            //Check if player is allowed to enter area
           
            
    
            if (Areas[currentArea].lvlRequired <= player.lvl){ // check if player can enter
                encounterHeader.innerHTML = event.target.innerHTML;
                exploreAreaBtn.style.display = "inherit";
                fightScreen.style.display = "none";
                midDiv.style = Areas[currentArea].picture;
                
            } else{ // if player can't enter
                encounterHeader.innerHTML = "You must be level " + Areas[currentArea].lvlRequired + " to proceed.";
                exploreAreaBtn.style.display = "none";
                midDiv.style = Areas[currentArea].picture;
            }
    
        });
    }
}


