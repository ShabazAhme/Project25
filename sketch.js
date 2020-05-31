const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);
   bin1= new Bin();
   
   paper = new Paper(400,200,50,50);
    
}

function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    bin1.display();  
    paper.display();
    
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

