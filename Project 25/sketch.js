
var paperObject;
var trash;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperObject = new Paper(400, 350, 30);
	
	trash = new Dustbin(580, 680, 15, 130);

	ground = new Ground(width/2, 700, width, 30);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paperObject.display();
  //paperObject.keyPressed();

  trash.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.paper, paperObject.paper.position, {x : 85, y: -85});
	}
}




