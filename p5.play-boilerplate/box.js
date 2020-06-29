class Box{
constructor(x,y,width,height){
    var options={
        'isStatic': true
    }
    this.body = Body.rectangle(x,y,width,height,options);
    this.width = width ;
    this.height = height ;
    World.add(world,this.body);
  
}
display(){
    var pos = this.body.position ;
   
    fill(14,116,183);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}
}