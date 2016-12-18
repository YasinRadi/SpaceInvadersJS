
function Ship()
{
    this.x = width/2;
    this.xdir = 0;

    this.show = function()
    {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 20);
        rect(this.x, height - 40, 20, 20);
        rect(this.x+20, height - 20, 20, 20);
        rect(this.x-20, height - 20, 20, 20);
    }

    this.setDir = function(direction)
    {
        this.xdir = direction;
    }

    this.win = function(score)
    {
        var space = "                                                   " +
        "   ";
        var lose = confirm(space + "GAME OVER\n\n" +
        space + "Final score: " + score + "\n\n" +
        space +"Play again?");
        if(lose)
        {
            location.reload(true);
        }
        else {
            window.close();
        }
    }

    this.move = function()
    {
        this.x += this.xdir * 5;
    }
}
