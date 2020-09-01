const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var divisionHeight = 300;
var divisions = [];
var particles = [];
var plinkos = [];

// Constructor
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //divisions
  for(var k = 0; k <= width; k = k + 80 ){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  console.log("divisions array ", divisions)

  ground = new Ground(50,790,880,15);


  //plinkos
  for (var j = 40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = -10; j<= width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = -35; j<= width-30; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  ground.display();

  //to disply the for loop
  for(var i = 0; i< divisions.length; i=i+1){
    divisions[i].display();
  }

  for(var p = 0; p < plinkos.length; p=p+1){
    plinkos[p].display();
  }
  console.log(frameCount);
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2*10, width/2+10), 10, 10));
    console.log(particles);
  }

  for(var a = 0; a < particles.length; a++){
   particles[a].display();
  }

}