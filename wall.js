class createWall{

    constructor(x,y,w,h){

        var wall_options={

            isStatic:true

        }

        this.width=w;
        this.height=h;

        this.body= Bodies.rectangle(x,y,w,h,wall_options);
        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}