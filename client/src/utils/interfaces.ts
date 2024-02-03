import React from 'react';

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}

export interface createUser {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
  phoneNumber: string,
}

export interface logInUser {
  email: string,
  password: string,
}