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
            chests:[ //CREATE A CHANCE
            ["Wooden Loot Box", 10, 15],
            ["Stone Chest", 10, 15],
            ["Quartz Chest", 10, 15]
            ]
        },
        picture: 'background-image: url("http://3.bp.blogspot.com/-N7EpdPxfhhw/T0zLiujmqBI/AAAAAAAAAlQ/DVmfYjq0R_Y/s1600/cave.jpg")',
    },

    forest: {
        lvlRequired: 5,
        enemies:[
            ["Gremlin", 40, 6, 10, 8, 14, 18 ],
            ["Raider", 50, 7, 12, 10, 15, 20]
        ],
        loot: {
            chance: 18,
            chests: [
            ["Mossy Chest", 20,25],
            ["Oak Loot Box", 20,25],
            ]
        },
        picture: 'background-image: url("https://i.pinimg.com/originals/77/58/8a/77588af9fffb6ea8599a36af98410064.jpg")',
    },

    desert:{
        lvlRequired: 10,
        enemies: [
            ["Scorpion", 40, 6, 10, 8, 14, 18 ], //Change stats
            ["Living Cactus", 50, 7, 12, 10, 15, 20], //Change stats
            ["Snake", 50, 7, 12, 10, 15, 20], //Change stats
        ],
        loot: {
            cnance: 16,
            chests: [
                ["Clay pot", 20,25],
                ["Sandy Chest", 20,25],
            ]
        },
        picture: 'background-image: url("https://blog.spoongraphics.co.uk/wp-content/uploads/2015/vector-landscape/vector-landscape.jpg"); background-position: bottom',
    },

    abyss: {
        lvlRequired: 50,
        enemies:[
            ["Carnist", 40, 6, 10, 8, 14, 18 ],
            ["Dogmatic trump supporter", 50, 7, 12, 10, 15, 20]
        ],
        loot: {
            chance: 18,
            chests: [
            ["Mossy Chest", 20,25],
            ["Oak Loot Box", 20,25],
            ]
        },
        picture: 'background-image: url("http://coolvibe.com/wp-content/uploads/2012/07/Illustration-Rasmus-Berggreen-Into-the-Abyss.jpg")',
    },

}

var areaBtn;

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




