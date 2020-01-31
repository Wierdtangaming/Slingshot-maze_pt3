class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        if (display_vr === 1 || this.sling.bodyA){
        push();
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(4);
         stroke(255,255,255);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
    fly(){
        this.sling.bodyA = null;
        display_vr = 0;
    }
    

}