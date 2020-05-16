class Tank {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    
    this.body1 = Bodies.rectangle(x,y,width,height,options);
    this.body2 = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
      
    World.add(world,this.body1);
    World.add(world,this.body2);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill(255);
      rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
      rect(this.body2.position.x,this.body2.position.y,this.width,this.height);
      rectMode(CENTER);
    };
}
