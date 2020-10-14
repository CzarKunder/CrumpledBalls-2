
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustinImage;

function preload()
{
dustbinImage=loadImage("dustbingreen.png")	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Dustbin(700, 640,100,10);
	dustbin2=new Dustbin(650,590,10,100);
	dustbin3=new Dustbin(750,590,10,100);
	paper1=new Paper(100,100,30)
	ground1=new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255);
  paper1.display();
  ground1.display();
  imageMode(CENTER);
  image(dustbinImage,700,595,100,100);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
	}
}



