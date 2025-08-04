import Square from './Square';
import './Board.css';

function Board({ board, onSquareClick }) {
  console.log('Renderizando Board con estado:', board);

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;