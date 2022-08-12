import React, { FC } from "react";

export const Button: FC<{ primary: boolean }> = ({
  primary,
  children,
  style,
  ...rest
}) => {
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
