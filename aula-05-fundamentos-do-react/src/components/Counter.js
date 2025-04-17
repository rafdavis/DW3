import {useState} from 'react'

const Counter = () => {
    // let x = 0;
    // console.log(x);

// Criando o estado para o contador
// [consultar o valor, função para alterar o estado]
const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <p> Contador: {x}</p> */}
        {/* <button onClick={() => ( x = x + 1)}>Aumentar</button> */}
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)} style={{color: "black"}}>Aumentar</button>
        <button onClick={() => setCount(count - 1)} style={{color: "black"}}>Diminuir </button>
        <button onClick={() => setCount(0)} style={{color: "black"}}>Zerar</button>
      </div>
    </>
  );
};

export default Counter;
