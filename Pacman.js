class legends {
    constructor(passive,hitbox,speed,HP,coordinates) {
        this.hitbox = hitbox;
        this.speed = speed;
        this.HP = HP;
        this.coordinates = coordinates;
    }
        passive(){
            this.hitbox = this.hitbox - 1
        }
        tactical(){
            this.speed = this.speed + 1
        };
        ultimate(){
            this.HP = this.HP + 1
        }
    }

class guns{
    constructor(ammotype, damage, recoil, attachments, skin, range, reloadtime ) {
        this.ammotype = ammotype;
        this.damage = damage;
        this.recoil = recoil;
        this.attachements = attachments;
        this.skin = skin;
        this.range = range;
        this.reloadtime = reloadtime;
    }
        shoot(legendHP) {
            this.recoil += .25
            return legendHP - this.damage + this.recoil
            
        }

        reload(ammo) {
            return this.reloadtime = ammo * this.ammotype
        }

        addAttachment(type) {
            attachments.push(type)
        }
}

class grenades{
    constructor(radius, damage, range, timer) {
        this.radius = radius;
        this.damage = damage;
        this.range = range;
        this.timer = timer
    }
    throw() {
        let area = this.radius * this.damage;
        let location = this.range + area;
        return location
    }
}

class animals{
    constructor(size, speed, damage, color, HP) {
        this.size = size;
        this.speed = speed;
        this.damage = damage;
        this.color = color;
        this.HP = HP
    }
    move(coordinates) {
        coordinates.x = coordinates.x + this.speed.x
        coordinates.y = coordinates.y + this.speed.y
    }
    die(bullet) {
        return this.HP = this.HP - bullet
        
    }
}



