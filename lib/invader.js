
function Invader(x, y)
{
    this.x = x;
    this.y = y;
    this.height = 20;

    this.xdir = 2;

    this.show = function()
    {
        fill(102, 15, 130);
        rect(this.x, this.y, 40, this.height);
    }

    this.shiftDown = function()
    {
        this.y += this.height;
        this.xdir = this.xdir * (-1);
    }

    this.move = function()
    {
        this.x += this.xdir;
    }

    this.lose = function(score)
    {
        var space = "                                                   " +
        "   ";
        if(this.y >= height - 60)
        {
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
    }
}
