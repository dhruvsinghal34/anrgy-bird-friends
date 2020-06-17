class Box{
    constructor (x,y,width,height,color){
        var options={
            'restitution':0.4,
            'friction':1.0,
            'density':1.0

        
    }
        
        this.body=Bodies.rectangle (x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.color=color;
      this.image = loadImage("boy4.jpg")
      World.add(world,this.body);
      
    }
     display () {
         var posi=this.body.position;
         rectMode(CENTER);
        fill (this.color);
        image (this.image,posi.x,posi.y,this.width,this.height);
         //rect (posi.x,posi.y,this.width,this.height);
         
     }



}



