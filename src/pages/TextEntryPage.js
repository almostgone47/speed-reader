import React, {useState} from 'react';
import WordModal from '../components/WordModal'; // Import the modal component

function TextEntryPage() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    setText(e.target.innerText); // Update to use innerText for contentEditable
  };

  const handleReadClick = () => {
    setShowModal(true);
  };

  return (
    <div className="text-entry">
      <h1>Text Entry</h1>
      <div
        contentEditable
        name="text"
        onInput={changeHandler}
        style={{
          height: '400px',
          border: '1px solid black',
          padding: '10px',
          overflowY: 'scroll',
        }}
      />
      <button onClick={handleReadClick}>Read Text</button>
      {showModal && (
        <WordModal text={text} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default TextEntryPage;
