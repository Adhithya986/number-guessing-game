
let value=Math.floor(Math.random()*100+1);

let attempts =0;

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

   
    if( userGuess!=value )
    {
        attempts=attempts+1;

    }

    document.getElementById("attempts").innerHTML = attempts;
}




