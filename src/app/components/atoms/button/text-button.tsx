import React from "react";
import "./style.scss";

export function TextButton({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return React.createElement(
    "button",
    {
      onClick,
      className: className || "text-button",
      disabled,
    },
    children
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}
