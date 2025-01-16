import React from "react";

function HelloComponent() {
  return (
    <div>
      <h1>Este es un componente de prueba para ver react en astro</h1>
      <button onClick={() => alert("Hola")}>Click me</button>
    </div>
  );
}

export default HelloComponent;
