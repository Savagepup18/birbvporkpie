class Feather{
    constructor(x,y,w,h){
    
        var b_options = {
    
            restitution : 1,
            friction:0.7,
            density:1.75
          }
            this.object = Bodies.rectangle(x,y,w,h,b_options)
            this.w = w;
            this.h = h;
            World.add(world,this.object);
    }
    disrespect(){
        this.object.position.x = mouseX
        this.object.position.y = mouseY
        push();
        translate(this.object.position.x,this.object.position.y)  ;
        rotate(this.object.angle);
        fill("lime");
      //  stroke("green")
       // strokeWeight(8)
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
    }