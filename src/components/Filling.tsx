import { useState } from "react";

interface Props {
  type: string;
  color: string;
  removeLayer: (id: string) => void;
  id: string;
}

const Filling: React.FC<Props> = ({ color, type, removeLayer, id }) => {
  return (
    <div onClick={() => removeLayer(id)} style={{ color: color }}>
      {id}
    </div>
  );
};

export default Filling;
