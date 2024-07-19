import { useState } from "react";

interface Props {
  type: string;
  color: string;
}

const Filling: React.FC<Props> = ({ color, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const makeInvisible = () => {
    setIsVisible(false);
  };

  return (
    <div
      onClick={makeInvisible}
      style={{ color: color, display: `${isVisible ? "block" : "none"}` }}
    >
      {type}
    </div>
  );
};

export default Filling;
