const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var polygon, slingShot;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Log(810, 640, 300, 30);
    log = new Log(530, 530, 250, 30);

    box1 = new Box(840, -100, 70, 70);
    box2 = new Box(840, -50, 70, 70);
    box3 = new Box(840, 0, 70, 70);
    box4 = new Box(840, 50, 70, 70);
    pig3 = new Box(840, -150, 70, 70);
    box5 = new Box(840, 150, 70, 70);
    box6 = new Box(560, -100, 70, 70);
    box7 = new Box(560, -50, 70, 70);
    box8 = new Box(560, 0, 70, 70);
    box9 = new Box(560, 50, 70, 70);
    pig4 = new Box(560, 100, 70, 70);
    box10 = new Box(560, 150, 70, 70);

    polygon = new Polygon(100,100);

    sling = new Slingshot(polygon.body, { x: 200, y: 100 });
}

function draw(){
    background(20, 150, 250);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    log.display();

    box3.display();
    box4.display();
    pig3.display();
    box6.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    pig4.display();

    box5.display();

    polygon.display();
    sling.display();  

}

function mouseDragged() {
    
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });

}
function mouseReleased(){
    sling.fly()
}