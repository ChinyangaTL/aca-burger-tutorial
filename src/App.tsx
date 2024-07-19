import BaseBread from "./components/Basebread";
import Filling from "./components/Filling";
import TopBread from "./components/TopBread";

const App = () => {
  return (
    <div>
      <TopBread />
      <Filling color="red" type="tomato" />
      <Filling color="green" type="lettuce" />
      <Filling color="brown" type="meat" />
      <BaseBread />
    </div>
  );
};

export default App;
