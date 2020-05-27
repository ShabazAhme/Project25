const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);
   
   paper = new Paper(200,200,50,50);
   bin1 = new Bin(800,450,10,100);
   bin2 = new Bin(880,450,10,100); 
}

function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    bin1.display();
    bin2.display();   
    paper.display();
    
}


function keyReleased() {
    if(keyCode===32){
        paper.body.position.x=-2;
        paper.body.position.y=4;
    }
}