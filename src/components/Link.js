import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    return event.preventDefault();
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
