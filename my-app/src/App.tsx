import Carousel from "./components/Carousel";
import CorrectCarousel from "./components/CorrectCarousel";
import useToggle from "./hooks/modalToggle";

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
      {toggleOnAndOff ? <Carousel /> : <CorrectCarousel />}
      <button className="project_btn" onClick={toggleModal}>{toggleOnAndOff ? "See Correct Assignment 😎" : "See Wrong Assignment 😱"}</button>
    </div>
  );
}

export default App;
