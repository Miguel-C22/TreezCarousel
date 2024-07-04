import Carousel from "./components/Carousel";
import Drawer from "./components/DrawerCatagories";
function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src="/images/Treez-Logo.png" alt="" />
      </div>
      <Carousel />
    </div>
  );
}

export default App;
