import { useEffect, useState } from "react";
import BaseBread from "./components/Basebread";
import Filling from "./components/Filling";
import TopBread from "./components/TopBread";
import { v4 as uuidv4 } from "uuid";

const initialFilling = [
  { color: "red", type: "Tomato", id: uuidv4() },
  { color: "green", type: "Lettuce", id: uuidv4() },
  { color: "brown", type: "Meat", id: uuidv4() },
];

const App = () => {
  const [filling, setFilling] = useState(initialFilling);

  const removeLayer = (id: string) => {
    setFilling(filling.filter((layer) => layer.id !== id));
  };

  useEffect(() => {
    console.log(filling);
  });

  return (
    <div>
      <TopBread />
      {filling.map((layer) => {
        return (
          <>
            <Filling
              key={layer.id}
              type={layer.type}
              color={layer.color}
              removeLayer={removeLayer}
              id={layer.id}
            />
          </>
        );
      })}

      <BaseBread />
    </div>
  );
};

export default App;
