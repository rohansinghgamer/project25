class Paper{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:0.8,
			density:1.2
            }

        this.image = loadImage("paper.png");
		
		this.body=Bodies.circle(x, y, 40, options)
		
		//this.r=r
		World.add(world, this.body);
	}
    display(){			
			//var paperpos=this.body.position;		
			push();
			//translate(paperpos.x, paperpos.y);
			imageMode(RADIUS);
            image(this.image, this.body.position.x, this.body.position.y,70,70);
			pop();
			
	}

}