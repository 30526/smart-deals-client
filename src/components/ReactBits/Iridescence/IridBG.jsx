import React from "react";
import Iridescence from "./Iridescence";

const IridBG = () => {
  return (
    <Iridescence
      color={[1, 1, 1]}
      mouseReact={false}
      amplitude={0.1}
      speed={1.0}
    />
  );
};

export default IridBG;
