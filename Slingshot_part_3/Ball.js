class Ball{
  constructor(x, y,radius,r,g,b,angle) {
      var options = {
          'restitution':0.0,
          'friction':1.0,
          'density':10.
      }
      this.body = Bodies.circle(x, y, radius/2, options);

      this.radius = radius;
      World.add(world, this.body);
      this.r = r;
      this.g = g;
      this.b = b;
    }
    display(){

      rgbcount = 1;
      var angle = this.body.angle;
      push();
      strokeWeight(1);
      fill(0,0,0);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
    
      ellipse(0,0,this.radius,this.radius);
      fill(255,255,255);
      ellipse(6,-5,6,6);
      ellipse(15,-5,6,6); 
      ellipse(10,-13,6,6); 
      

      pop();
    }
}