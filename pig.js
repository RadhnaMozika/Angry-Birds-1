class Pig{
    constructor(x,y){
        var options={
            restitution:0.6
        }
        this. body=Bodies.rectangle(x,y, 50, 50,options);
        this.width=50;
        this.height=50;
        World.add(myworld,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill ("red");
        rect(0,0, this.width, this.height);
        pop();
    }

}