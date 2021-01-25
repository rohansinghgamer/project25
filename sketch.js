
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,350);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1250,445);
	
	//dustbin2=new Dustbin(1000,510,20,200);
	//dustbin3=new Dustbin(1100,600,200,20);
	//Create a Ground

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
 //dustbin2.display();
 //dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:335,y:-400});

  
	}
}

