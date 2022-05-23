import React from "react";

const Container = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => (
  <div
    className={`w-full px-4 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ${className}`}
  >
    {children}
  </div>
);

export default Container;
