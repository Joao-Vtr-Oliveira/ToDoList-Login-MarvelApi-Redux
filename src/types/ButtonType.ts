import React from "react";

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  className?: string;
}