var ship;
var invaders = Array(9);

function setup()
{
    createCanvas(800, 600);
    ship = new Ship();
    for(var i = 0; i < invaders.length; i++)
    {
        invaders[i] = new Invader((i*80+80), 60);
    }
}

function draw()
{
    background(47);
    ship.show();
    for(var i = 0; i < invaders.length; i++)
    {
        invaders[i].show();
    }
}

function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {
        ship.move(1);
    }
    else if(keyCode === LEFT_ARROW)
    {
        ship.move(-1);
    }
}
