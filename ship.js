function Ship1(speed, HP) {
    return {
    speed: speed,
    HP: HP,
    fireBullet: function() {
        return {
            speed: 1, 
            damage: 1,
        }
    }
    }
    
    }
    
    function Ship2(speed, HP) {
        
        this.speed = speed;
        this.HP =  HP;
        
        this.fireBullet = function() {
            return {
                speed: 1, 
                damage: 1,
            }
        }
    }
    
        class Ship3 {
            constructor(speed, HP) {
            this.speed = speed;
            this.HP =  HP;
            }
            fireBullet() {
                return {
                    speed: 1, 
                    damage: 1,
                }
            
            }
        }
    
    Ship1(1 ,3);
    const ship2 = new Ship2(1 ,3);
    const ship3 = new Ship3(1 ,3);
    
    console.log(ship3)
    
    console.log(ship2.fireBullet());