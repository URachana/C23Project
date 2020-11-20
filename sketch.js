const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var myEngine,myWorld;
var heliImg, packImg;
var helicopter, package;
var ground, packBody;

var wall1, wall2,wall3;

function preload()
{
	heliImg = loadImage("helicopter.png");
	packImg = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	myEngine= Engine.create();
	myWorld = myEngine.world;


	package =createSprite(width/2,height/4,10,10);
	package.addImage("parcel",packImg);
	package.scale=0.2;

	helicopter = createSprite(width/2,height/4, 10,10);
	helicopter.addImage("helicopter",heliImg);
	helicopter.scale=0.75;

	
	

	packBody = Bodies.rectangle(width/2,height/4,10,10,{restitution:1,isStatic:true});
	World.add(myWorld,packBody);

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, height-20, width,20,{isStatic:true});
	World.add(myWorld,ground);
	
	wall1 = new createWall(width/2,height-40,200,20);
	wall2 = new createWall((width/2)-90,height-80,20,100);
	wall3 = new createWall((width/2)+90,height-80,20,100)
	console.log(ground);
}


function draw() {
  background(15,100,180);
  Engine.update(myEngine);

  rectMode(CENTER);
  package.x= packBody.position.x;
  package.y=packBody.position.y;

  fill(rgb(180,180,60));
  rect(ground.position.x,ground.position.y,width,20);

  wall1.display();
  wall2.display();
  wall3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode=== DOWN_ARROW){
	Matter.Body.setStatic(packBody,false);
	}
}

