class BoxO
{
    constructor(x,y,w,h)
    {
        this.width = w
        this.height = h
    var box_options=
    {
        restitution: 0.8,
        friction: 1
    }
           this.body = Bodies.rectangle(x,y,w,h,box_options);
           World.add(world,this.body);

    }
display ()
{
    push();
    translate (this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("white");
    rect(0,0,this.width,this.height);
    pop();
}

}