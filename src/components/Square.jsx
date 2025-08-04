import './Square.css';

function Square({ value, onClick }) {
  return (
    <button 
      className={`square ${value ? 'filled' : ''} ${value === 'X' ? 'x-player' : ''} ${value === 'O' ? 'o-player' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;