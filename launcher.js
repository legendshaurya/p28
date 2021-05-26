class LauncherClass{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }

    display()
    {

if(this.Launcher.bodyA!==null)
{

    var pointA = this.Launcher.bodyA.position;
    var pointB =this.pointB ;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y); 
}
     
    }
 fly()  {
  this.Launcher.bodyA=null   
 } 
}