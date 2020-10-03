class par {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.r = r
      this.body = Bodies.circle(x, y, this.r ,options);
      this.color = color(random(0, 255), random(0, 255), random(0,255));

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }
  };
