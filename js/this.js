class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            lenght:50,
            stiffness:1
        }
this.chain=Matter.Constraint.create(options)
this.pointB=pointB
    }
