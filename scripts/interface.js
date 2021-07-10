document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    let square = event.target;
    let position = square.id;
    handleMove(position)
    updateSquares()
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
            winner = 'o Escudo'
        }
        else{
            winner = 'a Espada'
        }
        resultado.innerHTML = '<h1> o Vencedor foi '+ winner + '</h1><br>'
        resultado.innerHTML += '<input type="button" value="Restart" onclick="restartGame()" \n\
                                style="padding:5px;"><br>'
    }
    else{
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = '<h1> Deu velha! </h1><br>'
        resultado.innerHTML += '<input type="button" value="Restart" onclick="restartGame()" \n\
                                style="padding:5px;"><br>'
    }

}

function restartGameInterface() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        square.innerHTML = ''
    })
    resultado.innerHTML = ''


}

