import React from 'react';
import './TextInput.css';

const TextInput = ({ onAddText }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    if (text.trim() !== '') {
      onAddText(text);
      setText('');
    }
  };

  return (
    <div className="text-input">
      <input
        type="text"
        placeholder="Enter custom text"
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};


export default TextInput;
