class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.0001
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed < 5){
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          pop();
        }
        
      }

  score(){
       if(this.Visiblity<0 && this.Visiblity>-50){
         score++
       }

  }    


}