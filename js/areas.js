var areasDiv = document.getElementById("areasDiv");

var currentArea = undefined;


//Enemies vvvv
//0 = name, 1 = enemy health, 2 = min attack, 3 = max attack, 4 = xp drop, 5 = min Loot, 6, maxLoot
//Chests
//0 = name, 1 = min loot, 2 = max loot


let Areas = {
    cave: {
        lvlRequired: 0,
        enemies: [
            ["Bat", 15, 3, 5, 3, 5, 6],
            ["Ghoul", 25, 4, 7, 5, 10, 12]
        ],
        loot: {
            chance: 20,
            chests: ["Wooden Loot Box", 10, 15],
            chests: ["Stone Chest", 10, 15],
            chests: ["Quartz Chest", 10, 15]
        }
    },

    forest: {
        lvlRequired: 5,
        enemies:[
            ["Gremlin", 40, 6, 10, 8, 14, 18 ],
            ["Raider", 50, 7, 12, 10, 15, 20]
        ],
        loot: {
            chance: 18,
            chests: ["Mossy Chest", 20,25],
            chests: ["Oak Loot Box", 20,25],
            
        }
    }
}

loadAreaButtons();

function loadAreaButtons(){
    var newAreaBtn;
    var textContent;
    
    for (i in Areas){
        newAreaBtn = document.createElement("button");
        newAreaBtn.classList.add("areaBtn");
        i = i.capitalize();
        textContent = document.createTextNode(i);
        newAreaBtn.appendChild(textContent);
        areasDiv.appendChild(newAreaBtn);
    }
    
    newReturn = document.createElement("button");
    newReturn.classList.add("returnBtn");
    textContent = document.createTextNode("Return");
    newReturn.appendChild(textContent);
    areasDiv.appendChild(newReturn);

    getAreaBtns();
}




