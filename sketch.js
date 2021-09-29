
var sleeping,sleep



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png") 
brush = loadAnimation("brush.png")
bath = loadAnimation("bath1.png","bath2.png")
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")

}

function setup(){
 astronaut = createSprite(300,230)
 astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1 
}


function draw() {
  background(bg);  
  
  
  drawSprites();

  fill ("White")
  textSize(40)
  text("Instructions",100,50)
  
  textSize(10)
  text("UP_ARROW = Brushing",100,70)

  text("Down_Arrow = Gymming",100,90)

   text(" Right Arrow = Eating",100,110)

   text("Left Arrow = Bathing",100,130)

  

   if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing" , brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }


  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("Gymming" , gym)
    astronaut.changeAnimation("Gymming")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("Eating" , eat )
    astronaut.changeAnimation("Eating")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("Bathing" , bath)
    astronaut.changeAnimation("Bathing")
    astronaut.y=300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  
}






