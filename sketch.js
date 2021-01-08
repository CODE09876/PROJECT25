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

	ball = new Paper(100,450,20);
	ground = new Ground(width/2,680,width,20);
	wall1 = new  Dustbin(890,500,20,150);
	wall2 = new  Dustbin(900,500,20,150);
	wall3 = new  Dustbin(880,490,200,200);

	console.log(wall3);

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
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y: -20});
	}
}


