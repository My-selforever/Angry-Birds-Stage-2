class StickO
{
    constructor(x,y,h,a)
    {
        this.width = 20
        this.height = h

    var box_options=
    {
        restitution: 0.8,
        friction: 1
    }
 
    this.body = Bodies.rectangle(x,y,20,h,box_options);
  Matter.Body.setAngle(this.body,a);
    World.add(world,this.body);

    }
display ()
{
    push();
    translate (this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();
}

}