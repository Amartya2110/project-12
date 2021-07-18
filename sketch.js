var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf
var appleImg,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating a rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));


  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    
    else {
      createLeafs();
    }
  }


  //if(rabbit.isTouching(apple)){
   // apple.x = 460
 // }


  drawSprites();
}


function createApples(){
  apple = createSprite(random(50,350),40,10,10)
  apple.scale = 0.075;
  apple.addImage(appleImg);
  apple.velocityY = 2
}

function createLeafs(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.scale = 0.075;
  leaf.addImage(leafImg);
  leaf.velocityY = 2
}
  

