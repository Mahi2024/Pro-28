class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.5,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("magenta");
      fill("red");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };