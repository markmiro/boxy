import React, { FC } from "react";

type ButtonType = FC<
  { primary?: boolean } & React.HTMLProps<HTMLButtonElement>
>;

export const Button: ButtonType = ({ primary, children, style, ...rest }) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "blue" : "white",
        color: primary ? "white" : "black",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px 20px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
