import React from "react";

export interface InputTextType extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}