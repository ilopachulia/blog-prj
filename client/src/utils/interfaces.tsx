import React from 'react';

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
