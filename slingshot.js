class SlingShot{
  constructor(body1, point2){
  var options = {
      bodyA:body1,
      pointB:point2,
      stiffness:0.04,
      length:20
  }
  this.point2 = point2;
  this.sling = Constraint.create(options);
  World.add(world, this.sling);
}
udaan(){
  this.sling.bodyA = null
}

dikhao(){
  if (this.sling.bodyA){
  var pointA = this.sling.bodyA.position;
  var point2 = this.point2;
  line(pointA.x, pointA.y, point2.x, point2.y);
}
}

  rejoin(body) {
    this.sling.bodyA = body;
  }
}