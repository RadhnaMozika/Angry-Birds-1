class Ground {
    constructor(x,y, width, height)
    {
        var option={
            isStatic:true
        }

        this.body=Bodies.rectangle(x, y, width, height, option);
        this.width=width;
        this.height=height;

        World.add(myworld, this.body);


    }

    display(){
        var pose=this.body.position;
        rectMode(CENTER);
        fill ("brown");
        rect(pose.x, pose.y, this.width, this.height);
    }
}