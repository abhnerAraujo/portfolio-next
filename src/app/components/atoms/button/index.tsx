import React from "react";
import "./style.scss";

export function Root({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "text" | "flat";
}) {
  if (!React.isValidElement(children))
    throw new Error("Should be a button element");
  const buttonElement = React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    getPropsByType(children, type)
  );

  return <>{buttonElement}</>;
}

const getPropsByType = (
  buttonEl: React.ReactElement,
  type: "text" | "flat"
) => ({
  ...buttonEl.props,
  className: `${buttonEl.props.className} ${buttonClassMap[type]}`,
});

const buttonClassMap = {
  text: "text-button",
  flat: "flat-button",
  default: "button",
};
