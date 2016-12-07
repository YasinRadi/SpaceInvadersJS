
function Invader(x, y)
{
    this.x = x;
    this.y = y;

    this.show = function()
    {
        fill(20, 230, 20);
        rect(this.x, this.y, 40, 20);
    }

    this.move = function(direction)
    {
        this.x += direction * 5;
    }
}
