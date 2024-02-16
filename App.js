import { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);
  const [count, setCount] = useState(0);
  const [isCountVisible, setIsCountVisible] = useState(false);

  const handleCircle = () => {
    setCircles([...circles, { key: circles.length, color: "black" }]);
  };

  const colorChange = (index) => {
    if (circles[index].color === "black") {
      const updatedCircles = [...circles];
      updatedCircles[index].color = "grey";
      setCircles(updatedCircles);
      setIsCountVisible(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <button onClick={handleCircle}>Create Circle</button>
      {isCountVisible && <h1 id="center">{count} circles color changed</h1>}
      <div className="container">
        {circles.map((circle, index) => (
          <div
            key={index}
            className="circle"
            style={{ backgroundColor: circle.color }}
            onClick={() => colorChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
