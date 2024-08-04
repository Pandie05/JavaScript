let c = document.querySelector(`canvas`);
let ctx = c.getContext(`2d`);
let fps = 1000/60;
let timer = setInterval(main, fps);

let box = new GameObject();

let keys = []

document.addEventListener(`keydown`,function(e){keys[e.key] = true});
document.addEventListener(`keyup`,function(e){keys[e.key] = false});




function main(){

    ctx.clearRect(0,0,c.width,c.height);

    if(keys[`w`])box.vy += -1;
    if(keys[`s`])box.vy += 1;
    if(keys[`a`])box.vx += -1;
    if(keys[`d`])box.vx += 1;

    box.vx *= 0.9;
    box.vy *= 0.9;

    box.move();
    box.render();

}
