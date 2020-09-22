class Dustbin{
    constructor( x, y, width, height){
        var options = {
            isStatic:true
        }    
    this.trash = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.trash);     
    this.TrashImage = loadImage("trashImage.png");
    World.add(world, this.TrashImage);

    }
    

    display(){
        var pos = this.TrashImage.position;
        push();
        //fill("red");
        imageMode(CENTER);
        image(this.TrashImage, this.TrashImage.pos.x, this.TrashImage.pos.y, this.width, this.height);
        pop();
        }


}