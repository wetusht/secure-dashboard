import React from 'react';

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  return (
    <div className="modal">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Modal;