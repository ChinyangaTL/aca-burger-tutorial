import { useState } from "react";
import BaseBread from "./components/Basebread";
import Filling from "./components/Filling";
import TopBread from "./components/TopBread";

const initialFilling = [
  { color: "red", type: "Tomato" },
  { color: "green", type: "Lettuce" },
  { color: "brown", type: "Meat" },
];

const App = () => {
  const [filling, setFilling] = useState(initialFilling);

  return (
    <div>
      <TopBread />
      {filling.map((layer) => {
        return (
          <>
            <Filling type={layer.type} color={layer.color} />
          </>
        );
      })}

      <BaseBread />
    </div>
  );
};

export default App;
