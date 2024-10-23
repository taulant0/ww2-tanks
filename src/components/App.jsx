import React from "react";
import Card from "./Card";
import tanks from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">World War II Tanks</h1>
      {tanks.map((tank) => (
        <Card 
          key={tank.name}
          name={tank.name}
          image={tank.imgURL}
          country={tank.country}
          year={tank.year}
          description={tank.description}
        />
      ))}
    </div>
  );
}

export default App;
