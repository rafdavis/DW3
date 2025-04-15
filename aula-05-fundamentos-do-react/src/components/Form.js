import {useState} from "react";

const Form = () => {
  // Estados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Função para evitar o comportamento padrão do formulário
  const handleSubmit = (event) => {
     event.preventDefault()

     // Aqui iria o código para enviar os dados para o back-end (API)
     console.log(name, email)
  }

  return (
    <>
      <h1>Formulário de cadastro:</h1>
      <br />
      <form onSubmit={handleSubmit}>
        {/* Quando o valor do input mudar, pegue o novo valor e atualize o estado */}
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" style={{ color: "black" }}>
          Cadastrar
        </button>
        <br />
        <br />
      </form>
    </>
  );
};

export default Form;
