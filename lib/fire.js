
function Fire(x, y)
{
    this.x = x;
    this.y = y;
    this.height = 7.5;
    this.toDelete = false;

    this.show = function()
    {
        fill(170);
        rect(this.x, this.y, this.height * 2, this.height * 2);
    }

    this.intersects = function(invader)
    {
        var d = dist(this.x, this.y, invader.x, invader.y);

        if(d < this.height + invader.height)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    this.rem = function()
    {
        this.toDelete = true;
    }

    this.move = function()
    {
        this.y -= 30;
    }
}
