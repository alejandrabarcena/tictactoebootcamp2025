import './GameStatus.css';

function GameStatus({ gameStatus, currentPlayer, winner }) {
  const getStatusMessage = () => {
    switch (gameStatus) {
      case 'won':
        return `🎉 ¡Jugador ${winner} ha ganado!`;
      case 'draw':
        return '🤝 ¡Es un empate!';
      case 'playing':
      default:
        return `🎮 Turno del jugador: ${currentPlayer}`;
    }
  };

  const getStatusClass = () => {
    switch (gameStatus) {
      case 'won':
        return 'status-won';
      case 'draw':
        return 'status-draw';
      case 'playing':
      default:
        return 'status-playing';
    }
  };

  console.log('Renderizando GameStatus:', { gameStatus, currentPlayer, winner });

  return (
    <div className={`game-status ${getStatusClass()}`}>
      <p>{getStatusMessage()}</p>
    </div>
  );
}

export default GameStatus;