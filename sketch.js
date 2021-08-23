
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options=
	{
     isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2		
	}
    ball=Boides.circle(400,400,20,ball_options);
	World.add(world,ball);
    var ground_options={
		isStatic:true
	}
	 ground=Bodies.rectangle(0,740,1200,40,ground_options);
	 World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}



