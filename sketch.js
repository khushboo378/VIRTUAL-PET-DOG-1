//Create variables here
var dog,HappyDog,database,foodS,foodStock


function preload(){

dogIMG=loadImage("images/dog1.png")
dog2IMG=loadImage("images/dog2.png")

}

function setup() {
  database=firebase.database()

	createCanvas(500,500);
  dog=createSprite(250,250,50,50)
  dog.addImage(dogIMG)
  dog.scale=0.2


 foodStock=database.ref('FOOD')
  foodStock.on("value",readStock)

  


}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dog2IMG)
}

else if(keyWentDown(DOWN_ARROW)){
  foodS=foodS+1
  noStroke()
  fill("white")
  textSize(18)
  text("FOOD SUPPLIED!",100,200)  

}



  drawSprites();
  //add styles here
  noStroke()
  fill("white")
  textSize(30)
  text("FOOD STOCK :"+ foodS ,200,100)
}

function readStock(data){
 foodS=data.val() 
}


function writeStock(x){
if(x<=0){
  x=0
}

else{
  x=x-1
}

database.ref('/').update({//DIDNT unterstood 
  'FOOD':x
})

}


  



