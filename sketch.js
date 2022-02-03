
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 1400);
	engine = Engine.create();
	world = Engine.world;
    
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball = Bodies.circle(450,450,40,ball_options);
 World.add(world,ball);

 rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

groundObj.display();
groundObj = new ground(700/2,67,700,20);
leftSide =  new ground(1100,600,20,120);
rightside = new ground(1300,600,20,120);





  drawSprites();
 
}

function keyPressed(){

 if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
 

 if(keyDown(RIGHT_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
 }
}

		


