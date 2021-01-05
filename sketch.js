const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,ground,
wall1,wall2,wall3;

var engine , world;


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,450,40);
	ground = new Ground(width/2,680,width,20);
	wall1 = new  Dustbin(1200,595,20,150);
	wall2 = new  Dustbin(1000,595,20,150);
	wall3 = new  Dustbin(1100,670,185,20);

	Engine.run(engine);
	
}



function draw() {
 
  background("white");
  rectMode(CENTER);
	
	ball.display();
	ground.display();
	wall1.display();
	wall2.display();
	wall3.display();

drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y: -85});
	}
}


