class Ground
{
    constructor()
    {
        var ground_Options = 
        {
            'isStatic': true
        }
           this.body = Bodies.rectangle(600,490,1200,20,ground_Options);
           World.add(world,this.body);

    }
display ()
{
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y,1200,20);
    
}

}