// iniciar variáveis
let board = ['', '', '', '', '', '', '', '', '',]
let playertime = 0;
let symbols = ['o', 'x'];
let gameOver = false
let win = ''
let playsCount = 0

function handleMove(position){
    if (gameOver){
        return
    }


    if (board[position] == ''){


        board[position] = symbols[playertime];

        if ( playertime == 0 ){
            playertime = 1;
        }
        else{
            playertime = 0;
        }
    }
    playsCheck();
}

function playerVictory() {
    let todasAsSequencias = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]

    for (let i = 0; i < todasAsSequencias.length; i++){
        let sequenciaDeVitoria = todasAsSequencias[i]
        let position1 = sequenciaDeVitoria[0]
        let position2 = sequenciaDeVitoria[1]
        let position3 = sequenciaDeVitoria[2]

        if (board[position1] == 'o' && board[position2] == 'o' && board[position3] == 'o'){
            gameOver = true;
            win = 'o';
            endGame(win);
        }
        else if (board[position1] == 'x' && board[position2] == 'x' && board[position3] == 'x'){
            gameOver = true;
            win = 'x';
            endGame(win);
            

        }
    }

    
}

function restartGame(){
    // reset de variáveis
    gameOver = false;
    playertime = 0;
    winner = ''
    for (let i = 0; i < board.length; i++){
        board[i] = '';
    }
    restartGameInterface()
}

function playsCheck(){
    let squaresCount = 0
    board.forEach((squares) =>{
        if (squares != ''){
            squaresCount += 1;
            playsCount = squaresCount;
            console.log(playsCount);
        } 
    })
    if (playsCount == 9){
        endGame('')
    }
}