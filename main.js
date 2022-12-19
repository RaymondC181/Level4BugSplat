function check()
{
    if(bugOne.src == "img/bug1.png")
    {
        bugOne.src ="img/squashed.png";
    }
}

function initialize()
{
    bugOne = document.getElementById("bug1");
}