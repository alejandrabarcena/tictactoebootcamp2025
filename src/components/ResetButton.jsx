import './ResetButton.css';

function ResetButton({ onReset }) {
  const handleReset = () => {
    console.log('Botón de reinicio presionado');
    onReset();
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      🔄 Nueva Partida
    </button>
  );
}

export default ResetButton;