class Star{
  constructor(x,y){
      var options = {
          friction: 0.001,
          restitution:0.1           
      }
      this.star = Bodies.circle(x,y,5,options)
      this.radius = 5;
      this.image = loadImage("images/Star.png");
      World.add(world, this.star);
      
  }

  updateY(){     
      if(this.star.position.y > height){

          Matter.Body.setPosition(this.star, {x:random(0,windowWidth),y:random(0,200)});
      }
  }

  display(){
     
      imageMode(CENTER);
     image(this.image, this.star.position.x,this.star.position.y,100,100 )
  }
}