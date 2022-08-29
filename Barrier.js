function barrier1(maxHP, currentHP, size, coordinates) {
    return {
        maxHP: maxHP,
        currentHP: currentHP,
        size: size,
        coordinates: coordinates,

        repair: function () {
            if (currentHP < maxHP) {
                currentHP = currentHP + 1;
                return currentHP;
            }  
            if(currentHP === maxHP) {

                size =  size + 1;
                return size;
            }
        },
        
        break: function () {
            if (currentHP > 0) {
                currentHP = currentHP - 1;
            } 
             if(currentHP === maxHP) {

                size = size - 1;
            }
        }


    }
}
function barrier2(maxHP, currentHP, size, coordinates) {
    
        this.maxHP = maxHP,
        this.currentHP = currentHP,
        this.size = size,
        this.coordinates = coordinates,

        this.repair = function () {
            if (currentHP < maxHP) {
                this.currentHP = currentHP + 1;
                return currentHP;
            }  
            if(currentHP === maxHP) {

                this.size =  size + 1;
                return size;
            }
        },
        
        this.break = function () {
            if (currentHP > 0) {
                currentHP = currentHP - 1;
            } 
             if(currentHP === maxHP) {

                size = size - 1;
            }
        }


    }
    class barrier3   {
    constructor(maxHP, currentHP, size, coordinates) {
    
        this.maxHP = maxHP;
        this.currentHP = currentHP;
        this.size = size;
        this.coordinates = coordinates;
    }
        repair() {
            if (this.currentHP < this.maxHP) {
                this.currentHP = this.currentHP + 1;
                return this.currentHP;
            }  
            if(this.currentHP === this.maxHP) {

                this.size =  this.size + 1;
                return this.size;
            }
        };
        
        break() {
            if (this.currentHP > 0) {
                this.currentHP = this.currentHP - 1;
                return this.currentHP;
            } 
             if(this.currentHP === this.maxHP) {

                this.size = this.size - 1;
                return this.size;
            }
        };
    }

    

//const coordinates = {x:3, y:5}
//const Barrier1 = barrier1(100, 95, 55, coordinates)
//Barrier1.repair();
//console.log(Barrier1);

//const coordinates = {x:3, y:5}
//const Barrier2 = new barrier2(100, 100, 55, coordinates)
//Barrier2.repair();
//console.log(Barrier2);

const coordinates = {x:3, y:5}
const Barrier3 = new barrier3(100, 95, 55, coordinates)
Barrier3.repair();
console.log(Barrier3);