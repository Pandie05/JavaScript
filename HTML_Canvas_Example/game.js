
//Get the canvas
var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

//Create an array 
var box = [];
var amt = 50;

//Add Game Objects to the array
for(let i=0; i<amt; i++)
{
    box[i] = new GameObject();
    box[i].x = rand(0, c.width);
    box[i].y = rand(0, c.height);
    box[i].w = rand(5, 15);
    box[i].h = box[i].w
    box[i].vx = 0;
    box[i].vy = rand(5, 15);
    box[i].color = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`
}

console.log(box)

//animation loop
var timer = setInterval(main, 1000/60)
function main()
{
    //erase the screen
    ctx.clearRect(0,0,c.width,c.height);

    //Move and draw the boxes
    for(let i=0; i<box.length; i++)
    {
        
        box[i].move();

        //Check to see if the box is off th screen
        if(box[i].y > c.height-box[i].h)
        {
            box[i].y = -box[i].h
        }

        box[i].draw();
    }
}


//Random Number function
function rand(_low, _high)
{
    return Math.random() * (_high -_low) + _low;
}

