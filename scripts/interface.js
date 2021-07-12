document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    if (gameOver == false)
    {
        let square = event.target;
        let position = square.id;
        handleMove(position)
        updateSquares()
    }
    else{ 
        return
    }
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        
        if(symbol != ''){
            square.innerHTML = '<div class='+ symbol +'></div>'

        }
    })
    playerVictory()


}

function endGame(winner){

    if(winner != ''){
        let resultado = document.getElementById("resultado")

        if (winner == 'o'){
            winner = ' shield ';
            shieldWinCount += 1;
            let shieldDiv = document.getElementById("shieldPoints");
            shieldDiv.innerHTML = '<h3>'+ shieldWinCount +'</h3>';
            gameOver = true
        }
        else{
            winner = ' sword'
            swordWinCount += 1
            let swordDiv = document.getElementById("swordPoints");
            swordDiv.innerHTML = '<h3>'+ swordWinCount +'</h3>'
            gameOver = true
        }
        resultado.innerHTML = '<h1> The '+ winner + ' wins</h1><br>'
        resultado.innerHTML += '<input type="button" value="Restart" onclick="restartGame()" \n\
                                ><br>'
    }
    else{
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = '<h1> Draw! </h1><br>'
        resultado.innerHTML += '<input type="button" value="Restart" onclick="restartGame()" \n\
                                ><br>'
    }

}

function restartGameInterface() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        square.innerHTML = ''
    })
    resultado.innerHTML = ''


}

