
let value=Math.floor(Math.random()*100+1);

function guessNumber()
{
    let userGuess = document.getElementById("num").value;
    if(userGuess==value)
    {
        alert("Congratulations! You guessed the number.");
    }   
    else if(userGuess<value)
    {
        alert("Too low! Try again.");
    }   
    else if(userGuess>value)
    {
        alert("Too high! Try again.");
    }

}




