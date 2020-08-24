class boyorgirl{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
        this.image = loadImage("Plucking+mangoes/boy.png"); 
        // World.add(world, this.body)
       }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
}
}