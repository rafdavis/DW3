import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div>
        <p><strong>Este é o Componente Pai</strong></p>
        {/* Chamando o componente pai */}
        <Child />
      </div>
    </>
  );
};

export default Parent;
