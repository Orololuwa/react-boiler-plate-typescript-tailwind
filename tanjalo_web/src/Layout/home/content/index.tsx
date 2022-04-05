import React from "react";

const Content = (props: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="mt-16 lg:mt-0 py-6 lg:py-8 px-4 lg:px-12">
      {" "}
      {props.children}
    </main>
  );
};

export default Content;
