import Bakcground from "./components/Background";
import Forground from "./components/Forground";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Bakcground />
     <Forground/>
    </div>
  );
};
export default App;
