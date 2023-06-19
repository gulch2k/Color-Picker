import { useState } from 'react';
import './index.css';

// Color component
const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div
      className={color === selectedColor ? `${color} selected` : color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};


// App component
const App = () => {

  const [selectedColor, setSelectedColor] = useState("")

  return (

    <div id="app">
    <div id="container">
      <div id="navbar">
         {/* Display the currently selected color */}
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* Render Color components with different colors */}
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>"
        <Color color="purple" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>"
      </div>
    </div>
  </div>

  );
};

export default App;
