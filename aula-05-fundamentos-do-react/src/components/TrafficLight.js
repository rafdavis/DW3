// Importando o hook useState
import { useState } from "react";

const TrafficLight = () => {
  // Criando um estado para manipular as cores
  // [color = consulta o valor / setColor = altera o valor]
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Semáforo</h3>
        <br />
        <div
          style={{
            backgroundColor: color == "red" ? color: "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>{" "}
        {/*Css inline deve ser feito com style = {{}} */}
        <div
          style={{
            backgroundColor: color == "yellow" ? color: "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: color == "green" ? color: "gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        ></div>
        <br />
        <button onClick={() => setColor("red")}style={{color: "black"}}>Pare!</button> <br />
        <button onClick={() => setColor("yellow")}style={{color: "black"}}>Atenção!</button> <br />
        <button onClick={() => setColor("green")} style={{color: "black"}}>Siga!</button> <br />
      </div>
    </>
  );
};

export default TrafficLight;
