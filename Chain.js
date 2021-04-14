class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.07,
            length:20, 
        }
        this.bodyB = bodyB
        this.Chain= Matter.Constraint.create(options)
        World.add(myWorld, this.Chain);
    }
    display(){
    var bodyA = this.Chain.bodyA.position;
    var bodyB = this.bodyB;
    strokeWeight(8);
    line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
    

}

}



 