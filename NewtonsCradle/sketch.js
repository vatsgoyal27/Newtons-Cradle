const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,bob,ground;

function setup() {
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }
  ground = Bodies.rectangle(200,400,20000,20,ground_options)
  World.add(world,ground);

  var holder_options={
    isStatic: true
  }
  holder = Bodies.rectangle(200,100,200,20,holder_options);
  World.add(world,holder);
  holder2 = Bodies.rectangle(280,100,200,20,holder_options);
  World.add(world,holder2);
  holder3 = Bodies.rectangle(360,100,200,20,holder_options);
  World.add(world,holder3);
  holder4 = Bodies.rectangle(440,100,200,20,holder_options);
  World.add(world,holder4);

var bob_options = {
  restitution : 1,
  density: 4
}
  bob = Bodies.circle(200,100,40,bob_options);
  World.add(world,bob);
  bob2 = Bodies.circle(280,100,40,bob_options);
  World.add(world,bob2);
  bob3 = Bodies.circle(360,100,40,bob_options);
  World.add(world,bob3);
  bob4 = Bodies.circle(440,100,40,bob_options);
  World.add(world,bob4);

var line_options = {
  bodyA : bob,
  bodyB : holder,
  stiffness: 0.004,
  length : 200
}
var line_options2 = {
  bodyA : bob2,
  bodyB : holder2,
  stiffness: 0.004,
  length : 200
}
var line_options3 = {
  bodyA : bob3,
  bodyB : holder3,
  stiffness: 0.004,
  length : 200
}
var line_options4 = {
  bodyA : bob4,
  bodyB : holder4,
  stiffness: 0.004,
  length : 200
}
var string = Constraint.create(line_options);
World.add(world,string);
var string2 = Constraint.create(line_options2);
World.add(world,string2);
var string3 = Constraint.create(line_options3);
World.add(world,string3);
var string4 = Constraint.create(line_options4);
World.add(world,string4);
}


function draw() { 
  Engine.update(engine);
  background("red");
  text("PRESS RIGHT ARROW KEY TO RESET THE CRADLE",200,20, 300);
  
  fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,holder.length,holder.width);
fill ("black");
rectMode(CENTER);
rect(holder2.position.x,holder2.position.y,holder2.length,holder2.width);
fill ("black");
rectMode(CENTER);
rect(holder3.position.x,holder3.position.y,holder3.length,holder3.width);
fill ("black");
rectMode(CENTER);
rect(holder4.position.x,holder4.position.y,holder4.length,holder4.width);

fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,20000, 20);



fill("green");
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,40);
fill("green");
ellipseMode(RADIUS);
ellipse(bob2.position.x,bob2.position.y,40);
fill("green");
ellipseMode(RADIUS);
ellipse(bob3.position.x,bob3.position.y,40);
fill("green");
ellipseMode(RADIUS);
ellipse(bob4.position.x,bob4.position.y,40);

strokeWeight(2);
stroke("white");
line(bob.position.x,bob.position.y,holder.position.x,holder.position.y)
strokeWeight(2);
stroke("white");
line(bob2.position.x,bob2.position.y,holder2.position.x,holder2.position.y)
strokeWeight(2);
stroke("white");
line(bob3.position.x,bob3.position.y,holder3.position.x,holder3.position.y)
strokeWeight(2);
stroke("white");
line(bob4.position.x,bob4.position.y,holder4.position.x,holder4.position.y)






if(keyCode == 37){
  bob.position.x = 20;
  bob.position.y = holder.position.y;
  }

}




