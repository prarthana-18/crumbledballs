
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var engine,world,dustbin,paper;	
}

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	line1=createSprite(720,390,100,10);
	line1.shapeColor="red";
	line2=createSprite(700,390,10,100);
	line2.shapeColor="red";
	line3=createSprite(750,390,10,100);
	line3.shapeColor="red";

	dustbin1=new dustbin(720,390,100,10);
	paper1=new paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,10 ,{
		isStatic:true
	});
		
	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 line1.display();
 line2.display();
 line3.display();
  paper1.display();

  
  drawSprites();
 
}
function keyPressed(){
if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{
		x:12 ,
		y: -13

	});
}

}



