class Shape{
    constructor(x,y,w,h){
      
        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
        this.image = loadImage('polygon.png')
        
        World.add(world, this.body);
    }
      
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER)
      image(this.image, pos.x, pos.y, this.width, this.height)
      pop()
      
    }
}
