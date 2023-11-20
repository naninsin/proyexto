class Briddrop{
    constructor(x,y,size)
    {

        this.image=new Image();
        this.image.src='img/muerto.png';
        this.spritewidth = 603;
        this.spriteheight = 762;
        this.size=size; 
        this.x=x;
        this.y=y;
        this.timesincelastframe=0;
        this.frameinterval=1000;
        this.deleteentity=false;
    }
    update(timediference)
    {
        this.timesincelastframe += timediference;
        this.y +=10;
        if (this.timesincelastframe > this.frameinterval)
        {
            this.deleteentity=true;
        }

    }
    draw(){
        context.drawImage(this.image, 0, 0, this.spritewidth,
            this.spriteheight, this.x, this.y-this.size/4,
            this.size, this.size);
    }
}