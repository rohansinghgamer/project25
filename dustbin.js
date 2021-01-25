class Dustbin {
    constructor(x, y) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 0, 0, options);
      this.width = 0;
      this.height = 0;
      this.image = loadImage("dustbin.png");
      
      World.add(world, this.body);
    }
    display(){
      /*var pos =this.body.position;
      var angle = this.body.angle;
     push();
      translate(pos.x, pos.y);
      rotate(angle);*/
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
      //rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      //fill(0);
      //rect(0, 0, this.width, this.height);
      //pop();
    }
  };
  