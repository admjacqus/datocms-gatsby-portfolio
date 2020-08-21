import React from "react";
import { RandomBlob } from 'react-random-shapes'
const Icon = () => (
  <React.Fragment>
    <RandomBlob
      className={"blob"}
      size={500}
      options={{
        style: {fill: "#F1D8C5"}
      }}
    />
  </React.Fragment>
);
export default Icon;
