class Box{
    constructor(x, y, width, height){
        var option = {
            restitution:0.3,
            friction:1
        }
    this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        this.visibility = 255
        
        World.add(world, this.body);
      }
      display(){
        var speed = this.body.speed
        if(speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body)
          this.visibility = this.visibility-5
          
        }
      }
      score(){
        if(this.visibility<0 && this.visibility>-501){
          score++
        }
      }
    }