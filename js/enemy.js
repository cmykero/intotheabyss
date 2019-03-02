
//Enemy Object
function Enemy(name, health, minAttack, maxAttack, xpDrop, minLoot, maxLoot){
    this.name = name;
    this.health = health;
    this.minAttack = minAttack;
    this.maxAttack = maxAttack;
    this.xpDrop = xpDrop;
    this.minLoot = minLoot;
    this.maxLoot = maxLoot;

}

let randomEnemy;

let enemy = {
    getEnemy(){

        for(var i in Areas){
            if(i == currentArea){
                // i--;
                randomEnemy = randomizer(0, Areas[i].enemies.length-1);
                currentEnemy = Areas[i].enemies[randomEnemy];
            }
        }

        randomEnemy = new Enemy(currentEnemy[0], currentEnemy[1], currentEnemy[2], currentEnemy[3], currentEnemy[4],  currentEnemy[5], currentEnemy[6]);
    },

    enemyAttack(){
        return randomizer(randomEnemy.minAttack, randomEnemy.maxAttack);
    }
}


