import {useState} from 'react'

const Contador = () => {
    
const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count - 1)}>Diminuir </button>
      </div>
    </>
  );
};

export default Contador;
