var interval = {};
function initMovement(car, speed) 
{
    var carObj = document.getElementById(car);
    var left = 0; //Sets the initial distance to 0
    interval[car] = setInterval(function()
    {
        var random = Math.floor(Math.random()*10);//Used to generate a random speed for each car
        left = left + random;
        
        carObj.style.left = left+"px";
        
        if(left >= 930)//Used to determine the length the cars go before they stop
        {
            for(var i in interval) 
            {
                clearInterval(interval[i]);
            }
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
        }
      
    },10);
}
function start()//function to start the car
{
    var speed1 = initMovement("car1", speed1);
    var speed2 = initMovement("car2", speed2);
    var speed3 = initMovement("car3", speed3);
    var speed4 = initMovement("car4", speed4);
    
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop()//function to stop the car
{
    for(var i in interval) 
    {
        clearInterval(interval[i]);
    }
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}