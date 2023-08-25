import React from 'react';
import './index.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <button className='a-button' type={type}>{children}</button>;
};

export default Button;
