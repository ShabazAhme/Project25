const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);

   tank1 = new Tank(60,580,100,20);
   up1 = new Up(60,200,100,20);
}

function draw() {
    background("black");
    Engine.update(engine);

    ground.display();

    tank1.display();
    up1.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}