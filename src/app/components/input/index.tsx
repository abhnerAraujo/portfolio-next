"use client";

import "./styles.scss";

export function Input({
  placeholder,
  dirty,
  value,
  size,
  onChangeValue,
}: {
  placeholder?: string;
  dirty?: boolean;
  pure?: boolean;
  touched?: boolean;
  value?: string;
  size?: "full" | "half";
  onChangeValue?: (value: string) => void;
}) {
  const sizeClass = size === "full" ? "w-full" : "w-1/2";

  return (
    <>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChangeValue && onChangeValue(event.target.value)}
        className={`rounded-lg p-4 h-14 text-lg ${
          dirty ? "-dirty" : ""
        } ${sizeClass}`}
      />
    </>
  );
}
