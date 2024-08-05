//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .93

//player array
var player = [new Player(), new Player()]

//give player paddle
player[0].pad = new Box();
player[1].pad = new Box();

//pad array
var pad = [player[0], player[1]]

pad[0] = player[0].pad
pad[1] = player[1].pad

//p1 setup
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

//p2 setup
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -3
ball.vy = -3
ball.color = `black`



//score setup
player[0].score = 0
player[1].score = 0

var scoreDivs = document.querySelectorAll('#score div')

console.log(scoreDivs);

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    //applies friction
    pad[0].vy *= fy
    //player movement
    pad[0].move();

    //p2 movement
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }

    pad[1].vy *= fy
    pad[1].move();

    //ball movement
    ball.move()

    //p1 collision
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }

    //p2 collision
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }

    //p1 with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //p2 with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //scoring
    if(ball.x < 2)
    {
        player[1].score++

        console.log(player[1].score, "|", player[0].score)
    }

    if(ball.x > c.width - 2)
    {
        player[0].score++

        console.log(player[1].score, "|", player[0].score)
    }

    //score display
    for (var i = 0; i < scoreDivs.length; i++) 
    {
        scoreDivs[i].innerText = `Player ${i + 1}: ${player[i].score}`;
    }

    //draw the objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
}