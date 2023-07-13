import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-wrap flex-col">{children}</div>;
};

export default Container;
