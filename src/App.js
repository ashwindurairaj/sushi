import './App.css';
import Banner from './Components/Banner';
import "../src/Assets/Common.css"
import JapaneseFlavours from './Components/Japanesflvour';
import Dish from './Components/Dish';
import SpecialDish from './Components/SpecialDish';


function App() {
  return (
    <div className="whole-page">
      <Banner/>
      <JapaneseFlavours/>
      <Dish/>
      <SpecialDish/>
    </div>
  );
}

export default App;
