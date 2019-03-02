 // POTIONS
//0 = Name, 1 = price, 2 = buff

 // WEAPONS
// 0 = ID, 1 = Name, 2 = Price

let Shop = {
    potions:[
        ["Small Antidote", 10, 20],
        ["Small Potion", 20, 45],
    ],

    weapons:[
        ["Stick", 10, 2],
        ["Bat", 20, 5], 
        ["Wooden Sword", 50, 15],
    ]
};

var shopDiv = document.getElementById("shopDiv");
var shopItemsDiv = document.getElementById("shopItemsDiv");




loadShopSections();

function loadShopSections(){
    
    
    for (i in Shop){
        shopSectionBtn = document.createElement("button");
        shopSectionBtn.classList.add("shopSectionBtn");
        i = i.capitalize();
        textContent = document.createTextNode(i);
        shopSectionBtn.appendChild(textContent);
        shopDiv.appendChild(shopSectionBtn);
        // console.log(newAreaBtn);
    }
        
    newReturn = document.createElement("button");
    newReturn.classList.add("returnBtn");
    textContent = document.createTextNode("Return");
    newReturn.appendChild(textContent);
    shopDiv.appendChild(newReturn);
}


var shopSectionBtn = document.getElementsByClassName("shopSectionBtn");
var selectedShopSection;

for (var i = 0; i < shopSectionBtn.length; i++) {
    shopSectionBtn[i].addEventListener('click', function(event){
        shopDiv.style.display = "none";
        shopItemsDiv.style.display = "inherit";

        selectedShopSection = event.target.innerHTML.toLowerCase();

        for(i in Shop[selectedShopSection]){
            itemBtn = document.createElement("button");
            itemBtn.classList.add("itemBtn");
            if(selectedShopSection == "potions"){
                itemInfo = Shop[selectedShopSection][i][0] + ": $" + Shop[selectedShopSection][i][1] + ", +" + Shop[selectedShopSection][i][2] + "hp";
            } else {
                itemInfo = Shop[selectedShopSection][i][0] + ": $" + Shop[selectedShopSection][i][1] + ", +" + Shop[selectedShopSection][i][2] + "atk";
            }
            
            
            textContent = document.createTextNode(itemInfo);
            itemBtn.appendChild(textContent);
            shopItemsDiv.appendChild(itemBtn);

        }

        newReturn = document.createElement("button");
        newReturn.classList.add("shopReturnBtn");
        textContent = document.createTextNode("Return");
        newReturn.appendChild(textContent);
        shopItemsDiv.appendChild(newReturn);
        initShopReturnBtn();
        initShopItemBtn();
    });
}


function initShopItemBtn(){
    var itemBtn = document.getElementsByClassName("itemBtn");

    for (var i = 0; i < itemBtn.length; i++) {
        itemBtn[i].addEventListener('click', function(event){

            selectedShopItem = event.target.innerHTML.split(":")[0];
            console.log(selectedShopItem);
            for (var i = 0; i < itemBtn.length; i++) {
                shopIndex = Shop[selectedShopSection][i];

                if(selectedShopSection == "potions"){
                    if(player.health == lvl[player.lvl][2]){
                       return alert("You're already at full health!");
                    } else {
                        if(shopIndex[0] == selectedShopItem){
                            if(shopIndex[1] <= player.currency){
                                player.health += shopIndex[2];
                                if (player.health > lvl[player.lvl][2]){
                                    player.health =  lvl[player.lvl][2]
                                }

                                player.currency -= shopIndex[1];
                                updateGUI();
                            } else {
                                alert("You don't have enough money, go explore!")
                            }
                        }
                    }
                   
                } else if (selectedShopSection == "weapons"){
                    if(shopIndex[0] == selectedShopItem){
                        if(shopIndex[1] <= player.currency){
                            player.currency -= shopIndex[1];
                            player.weapon = shopIndex;
                            alert("You purchased the " + selectedShopItem)
                            console.log(player);
                            updateGUI();
                        } else {
                            alert("You don't have enough money, go explore!")
                        }
                    }
                }

            }

            
        });
    }
}


function initShopReturnBtn(){
    var shopReturnBtn = document.getElementsByClassName("shopReturnBtn");
    var itemBtn = document.getElementsByClassName("itemBtn");

    for (var i = 0; i < shopReturnBtn.length; i++) {
        shopReturnBtn[i].addEventListener('click', function(){  
            while(shopItemsDiv.firstChild){
                shopItemsDiv.removeChild(shopItemsDiv.firstChild);
            }            
            shopDiv.style.display = "inherit";
            shopItemsDiv.style.display = "none";
        });
    }
}
