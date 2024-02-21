import React from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "primary" | "secondary" | "submit";
  children: React.ReactNode;
}

export interface createUser {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
}

export interface logInUser {
  email: string,
  password: string,
}