
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gamestate = "onsling";

var engine, world;

function preload(){
	backimage = loadImage("Plucking+mangoes/Mountain_and_Meadow_Ground_PNG_Cartoon_Image.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	manggo = new mangoes(1200, 200, 50);
	manggo2 = new mangoes(1150, 300, 60);
	manggo3 = new mangoes(1100, 150, 70);
	manggo4 = new mangoes(1300, 300, 40);
	manggo5 = new mangoes(1000, 200, 50);
	manggo6 = new mangoes(900, 300, 50);
	trees = new Tree(1100, 380, 500, 700);
	rocks = new rock(215, 400, 70);
	slingshot = new SlingShot(rocks.body, {x:274, y:456});
	boy = new boyorgirl(400, 550, 400, 400);
	ground = new Ground(700, 680, 1400, 40);


  
}


function draw() {
Engine.update(engine);
  background(backimage);
    boy.display();
	trees.display();
	manggo.display();
	manggo2.display();
	manggo3.display();
	manggo4.display();
	manggo5.display();
	manggo6.display();
	rocks.display();
	slingshot.dikhao();
	collision(rocks, manggo);
	collision(rocks, manggo2);
	collision(rocks, manggo3);
	collision(rocks, manggo4);
	collision(rocks, manggo5);
	collision(rocks, manggo6);
	ground.display();

	textSize(40);
	fill("Red");
	text("If want another rock press 'R' ",340, 110);



}

function mouseDragged(){
	if (gamestate == "onsling"){
    Body.setPosition(rocks.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased(){
	slingshot.udaan();
	gamestate = "launched";
}


function  collision(stone,mango){
	mango.body.position
	stone.body.position
	
	var distance=dist(mango.body.position.x, mango.body.position.y, stone.body.position.x, stone.body.position.y)
  
		if(distance<=mango.radius+stone.radius)
	  {
		Body.setStatic(mango.body, false);
	}
  
	}

function keyPressed(){
	if(keyCode == 82 ){
		if (gamestate == "launched")
		Body.setPosition(rocks.body, {x:274, y:456});
		slingshot.rejoin(rocks.body);
		gamestate = "onsling"
	}
}



