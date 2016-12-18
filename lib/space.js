var ship;
var invaders1 = Array(9);
var invaders2 = Array(9);
var invaders3 = Array(9);
var score = 0;
var fire = [];

function setup()
{
    createCanvas(800, 550);
    frameRate(10);
    ship = new Ship();
    for(var i = 0; i < invaders1.length; i++)
    {
        invaders1[i] = new Invader((i*80+80), 60);
    }
    for(var i = 0; i < invaders2.length; i++)
    {
        invaders2[i] = new Invader((i*80+80), 100);
    }
    for(var i = 0; i < invaders3.length; i++)
    {
        invaders3[i] = new Invader((i*80+80), 140);
    }
}

function draw()
{
    background(47);
    ship.show();
    ship.move();
    for(var i = 0; i < invaders1.length; i++)
    {
        invaders1[i].lose(score);
    }
    for(var i = 0; i < invaders2.length; i++)
    {
        invaders2[i].lose(score);
    }
    for(var i = 0; i < invaders3.length; i++)
    {
        invaders3[i].lose(score);
    }
    for(var i = 0; i < fire.length; i++)
    {
        fire[i].show();
        fire[i].move();

        for(var j = 0; j < invaders1.length; j++)
        {
            if(fire[i].intersects(invaders1[j]))
            {
                score++;
                invaders1.splice(j, 1);
                fire[i].rem();
            }
        }
        for(var j = 0; j < invaders2.length; j++)
        {
            if(fire[i].intersects(invaders2[j]))
            {
                score++;
                invaders2.splice(j, 1);
                fire[i].rem();
            }
        }
        for(var j = 0; j < invaders3.length; j++)
        {
            if(fire[i].intersects(invaders3[j]))
            {
                score++;
                invaders3.splice(j, 1);
                fire[i].rem();
            }
        }
    }
    var edge = false;
    for(var i = 0; i < invaders1.length; i++)
    {
        invaders1[i].show();
        invaders1[i].move();

        if(invaders1[i].x > width - 50 || invaders1[i].x < 50)
        {
            edge = true;
        }
    }
    for(var i = 0; i < invaders2.length; i++)
    {
        invaders2[i].show();
        invaders2[i].move();
        if(invaders2[i].x > width - 50 || invaders2[i].x < 50)
        {
            edge = true;
        }
    }
    for(var i = 0; i < invaders3.length; i++)
    {
        invaders3[i].show();
        invaders3[i].move();
        if(invaders3[i].x > width - 50 || invaders3[i].x < 50)
        {
            edge = true;
        }
    }
    if(edge)
    {
        for(var i = 0; i < invaders1.length; i++)
        {
            invaders1[i].shiftDown();
        }
        for(var i = 0; i < invaders2.length; i++)
        {
            invaders2[i].shiftDown();
        }
        for(var i = 0; i < invaders3.length; i++)
        {
            invaders3[i].shiftDown();
        }
    }
    for(var i = fire.length - 1; i >= 0 ; i--)
    {
        if(fire[i].toDelete)
        {
            fire.splice(i, 1);
        }
    }
    if(invaders1.length < 1 && invaders2.length < 1 && invaders3.length < 1)
    {
        ship.win(score);
    }
}

function keyReleased()
{
    if(key != ' ')
        ship.setDir(0);
}

function keyPressed()
{
    if(key === ' ')
    {
        fire.push( new Fire(ship.x, height - 70));
    }
    if(keyCode === RIGHT_ARROW)
    {
        if(ship.x < width - 40)
        {
            ship.setDir(2);
        }
        else {
            ship.setDir(0);
        }
    }
    else if(keyCode === LEFT_ARROW)
    {
        if(ship.x > 40)
        {
            ship.setDir(-2);
        }
        else
        {
            ship.setDir(0);
        }
    }
}
