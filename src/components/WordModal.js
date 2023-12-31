import React, {useState, useEffect} from 'react';

function WordModal({text, onClose}) {
  const [words, setWords] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setWords(text.split(/\s+/));
  }, [text]);

  useEffect(() => {
    // Change word every 1 second (1000 milliseconds)
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        if (prevIndex === words.length - 1) {
          clearInterval(interval);
          onClose(); // Close modal when done
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [onClose, words, speed]);

  const setSpeedHandler = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#282c34',
        padding: '20px',
        border: '1px solid black',
        zIndex: 1000,
      }}
    >
      <p style={{fontSize: '24px'}}>{words[currentWordIndex]}</p>
      <div>
        <label htmlFor="speedSlider">Adjust Speed:</label>
        <input
          type="range"
          id="speedSlider"
          min="100"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default WordModal;
