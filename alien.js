function alien1(HP, coordinates, speeds) {
    return {
   
    HP: HP,
    coordinates: coordinates,
    speeds: speeds,
    move: function() {
        coordinates.x = coordinates.x - speeds.x;
        coordinates.y = coordinates.y - speeds.y;
        },
    onHit: function(bullet){
        HP = HP - bullet;

    }
    }
    
    } 

    function Alien2(HP, coordinates, speeds) {
        this.HP = HP,
        this.coordinates = coordinates,
        this.speeds = speeds,
        this.move = function() {
            coordinates.x = coordinates.x - speeds.x;
            coordinates.y = coordinates.y - speeds.y;
            },
        this.onHit = function(bullet){
           this.HP = HP -  bullet;
    
        }
        }
        
        class Alien3 {
        constructor (HP, coordinates, speeds) {
            this.HP = HP;
            this.coordinates = coordinates;
            this.speeds = speeds;
        }
            move() {
                coordinates.x = coordinates.x - speeds.x;
                coordinates.y = coordinates.y - speeds.y;
                };
            onHit(bullet) {
               this.HP = this.HP -  bullet;
        
            }
            
        }

    
    
    //const coordinates = {x:3, y:5}
    //const speeds = {x:4, y:10}
    //const Alien1 = alien1(50, coordinates,speeds);   
    //console.log(Alien1);
    //Alien1.move(5, 6);
    
    //const coordinates = {x:3, y:5}
    //const speeds = {x:4, y:10}
    //const alien2 = new Alien2(50, coordinates,speeds); 
    //alien2.move(5, 6);
    //alien2.onHit(10);
    //console.log(alien2);
    
    const coordinates = {x:3, y:5}
    const speeds = {x:4, y:10}
    const alien3 = new Alien3(50, coordinates,speeds); 
    alien3.move(5, 6);
    alien3.onHit(10);
    console.log(alien3);
  