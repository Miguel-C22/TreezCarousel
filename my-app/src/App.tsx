import Carousel from "./components/Carousel";
import CorrectCarousel from "./components/CorrectCarousel";
import useToggle from "./hooks/toggle";

function App() {
  const { toggleOnAndOff, toggle} = useToggle(false);

  const toggleModal = () => {
    toggle()
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src="/images/Treez-Logo.png" alt="" />
      </div>
      <button className="project_btn" onClick={toggleModal}>{toggleOnAndOff ? "See Correct Carousel 😎" : "See Wrong Carousel 😱"}</button>
      {toggleOnAndOff ? <Carousel /> : <CorrectCarousel />}
    </div>
  );
}

export default App;
