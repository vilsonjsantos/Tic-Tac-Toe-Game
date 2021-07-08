// iniciar variáveis
let board = ['', '', '', '', '', '', '', '', '',]
let playertime = 0;
let symbols = ['o', 'x'];

function handleMove(position){
    if (board[position] == ''){


        board[position] = symbols[playertime];

        if ( playertime == 0 ){
            playertime = 1;
        }
        else{
            playertime = 0;
        }
    }
}