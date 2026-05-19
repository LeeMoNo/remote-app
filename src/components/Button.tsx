import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const RemoteButton: React.FC<ButtonProps> = ({ text = '远程按钮', onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#61dafb',
        color: '#282c34',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {text} (来自 Remote)
    </button>
  );
};

export default RemoteButton;