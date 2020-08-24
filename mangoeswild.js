class mangoes{
    constructor(x, y, r){
        var options ={
            isStatic:true,
            restitution:0.3
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        this.image = loadImage("Plucking+mangoes/mango.png");
        World.add(world, this.body)
    }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
}

}