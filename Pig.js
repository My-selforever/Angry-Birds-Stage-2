class Pig
{
    constructor(x,y)
    {
        this.width = 50
        this.height = 50
    var box_options=
    {
        restitution: 0.8,
        friction: 1
    }
           this.body = Bodies.rectangle(x,y,50,50,box_options);
           World.add(world,this.body);

    }
display ()
{
    push();
    translate (this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("green");
    rect(0,0,this.width,this.height);
    pop();
}

}