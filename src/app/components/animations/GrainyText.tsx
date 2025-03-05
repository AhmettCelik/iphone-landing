import React, { ElementType } from "react";

type GrainyTextProps = {
  text: string;
  as?: ElementType;
};

const GrainyText = ({ text, as: Component = "span" }: GrainyTextProps) => {
  return (
    <div>
      <Component>{text}</Component>
    </div>
  );
};

export default GrainyText;
