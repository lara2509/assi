import React from 'react';
import Draggable from 'react-draggable';
import Resizable from 'react-resizable-box';
import './TextOverlay.css';

const TextOverlay = ({ text, position, size, onDelete, onDrag, onResize }) => {
  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: position.x, y: position.y }}
      onStop={(e, data) => onDrag(data)}
    >
      <Resizable
        width={size.width}
        height={size.height}
        onResizeStop={(e, dir, ref, delta) => onResize(ref)}
      >
        <div className="text-overlay">
          <div className="handle">Drag here</div>
          <div className="content">{text}</div>
          <button onClick={onDelete}>Delete</button>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default TextOverlay;
