import { useState } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import ResetButton from './ResetButton';
import './TicTacToe.css';

function TicTacToe() {
  // Estado del tablero - array de 9 elementos (null, 'X', o 'O')
  const [board, setBoard] = useState(Array(9).fill(null));
  
  // Turno actual - empieza siempre con 'X'
  const [currentPlayer, setCurrentPlayer] = useState('X');
  
  // Ganador del juego
  const [winner, setWinner] = useState(null);
  
  // Estado del juego (playing, won, draw)
  const [gameStatus, setGameStatus] = useState('playing');

  // Función para verificar si hay un ganador
  const checkWinner = (squares) => {
    // Todas las posibles combinaciones ganadoras
    const winningCombinations = [
      [0, 1, 2], // fila superior
      [3, 4, 5], // fila media
      [6, 7, 8], // fila inferior
      [0, 3, 6], // columna izquierda
      [1, 4, 7], // columna media
      [2, 5, 8], // columna derecha
      [0, 4, 8], // diagonal principal
      [2, 4, 6], // diagonal secundaria
    ];

    // Verificar cada combinación ganadora
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Retorna 'X' o 'O'
      }
    }
    return null; // No hay ganador
  };

  // Función para verificar si el tablero está lleno
  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  // Función para manejar el clic en una casilla
  const handleSquareClick = (index) => {
    console.log(`Clic en casilla ${index}`);
    
    // No permitir clic si ya hay ganador o la casilla está ocupada
    if (winner || board[index]) {
      console.log('Clic ignorado - juego terminado o casilla ocupada');
      return;
    }

    // Crear nueva copia del tablero
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    
    console.log('Nuevo estado del tablero:', newBoard);
    setBoard(newBoard);

    // Verificar si hay ganador
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      console.log(`¡Ganador encontrado: ${gameWinner}!`);
      setWinner(gameWinner);
      setGameStatus('won');
      return;
    }

    // Verificar empate
    if (isBoardFull(newBoard)) {
      console.log('Empate - tablero lleno');
      setGameStatus('draw');
      return;
    }

    // Cambiar turno
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log(`Cambio de turno: ${currentPlayer} -> ${nextPlayer}`);
    setCurrentPlayer(nextPlayer);
  };

  // Función para reiniciar el juego
  const resetGame = () => {
    console.log('Reiniciando juego...');
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameStatus('playing');
  };

  return (
    <div className="tic-tac-toe">
      <h1 className="game-title">Tic Tac Toe</h1>
      
      <GameStatus 
        gameStatus={gameStatus}
        currentPlayer={currentPlayer}
        winner={winner}
      />
      
      <Board 
        board={board}
        onSquareClick={handleSquareClick}
      />
      
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default TicTacToe;