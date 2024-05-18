"use client";

import "./styles.scss";

export function Textarea({
  placeholder,
  value,
  dirty,
  size,
  onChangeValue,
}: {
  placeholder?: string;
  dirty?: boolean;
  pure?: boolean;
  touched?: boolean;
  value?: string;
  onChangeValue?: (value: string) => void;
  size?: "full" | "half";
}) {
  const sizeClass = size === "full" ? "w-full" : "w-1/2";

  return (
    <>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChangeValue && onChangeValue(event.target.value)}
        className={`rounded-lg p-4 min-h-24 text-lg ${
          dirty ? "-dirty" : ""
        }  ${sizeClass}`}
      ></textarea>
    </>
  );
}
