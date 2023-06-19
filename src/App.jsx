import { useState } from 'react';
import './index.css';

const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div
      className={color === selectedColor ? `${color} selected` : color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};



const App = () => {

  const [selectedColor, setSelectedColor] = useState("")

  return (

    <div id="app">
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>"
        <Color color="white" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>"
      </div>
    </div>
  </div>

  );
};

export default App;
