// Function to roll the dice
function rollDice()
{
    // Add shakeDice class to both dice images
    document.querySelector(".dice1-img").classList.add("shakeDice");
    document.querySelector(".dice2-img").classList.add("shakeDice");

    // Generate random scores for both players
    let score1 = Math.round(Math.random()*5);
    let score2 = Math.round(Math.random()*5);

    // Initialize variables to store dice image strings
    let dice1imgString , dice2imgString;

    // Determine the winner or if it's a draw
    if(score1>score2)
    {
        document.getElementById("whoWon").innerHTML="Player 1 Won the Roll !!!";
        dice1imgString = score1;
        dice2imgString = score2;
    }
    else if(score1<score2)
    {
        document.getElementById("whoWon").innerHTML="Player 2 Won the Roll !!!";
        dice1imgString = score1;
        dice2imgString = score2;
    }
    else
    {
        document.getElementById("whoWon").innerHTML="Its a Draw !!!";
        dice1imgString = score1;
        dice2imgString = score2;
    }

    // Array of dice images
    const diceimg = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

    // Set the source attribute of the dice images to the corresponding dice image
    document.querySelector(".dice1-img").setAttribute("src",diceimg[score1]);
    document.querySelector(".dice2-img").setAttribute("src",diceimg[score2]);

    // Remove shakeDice class from both dice images after 400ms
    setTimeout(function(){
        document.querySelector(".dice1-img").classList.remove("shakeDice");
        document.querySelector(".dice2-img").classList.remove("shakeDice");
    },400);
}