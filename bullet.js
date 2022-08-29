function Bullet1(speed, damage) {
return {
speed: speed,
damage: damage,
}

}

function Bullet2(speed, damage) {
    
    this.speed = speed;
    this.damage =  damage;
    
    
    }

    class Bullet3 {
        constructor(speed, damage) {
        this.speed = speed;
        this.damage =  damage;
        }
        
        }

Bullet1(1 ,3);
const bullet2 = new Bullet2(1 ,3);
const bullet3 = new Bullet3(1 ,3);

console.log(bullet3)

