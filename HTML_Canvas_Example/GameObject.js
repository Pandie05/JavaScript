function GameObject()
{
    this.x = 100;
    this.y = 100;
    this.w = 100;
    this.h = 100;
    this.color = `#00ffff`;
    this.vx = 0;
    this.vy = 0;

    this.move = function(){
        this.x+= this.vx
        this.y+= this.vy
    }

    this.draw = function()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}