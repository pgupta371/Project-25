class paper {
    constructor(x, y, r) {
      var options = {
          //'isStatic':false,
		    'restitution':0.5,
          'friction':1,
          'density':1.5
      }
    this.x=x;
		this.y=y;
    this.r=r;
    this.image = loadImage("Sprites/paper.png");
    this.body=Bodies.circle(x,y,r/2, options);
		World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }

     
   