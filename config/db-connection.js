// Importando o mongoose
import mongoose from "mongoose";
// Usuário e senha do banco de dados
const dbUser = "ricardofatec290";
const dbPassword = "5Ykf12VsIihlk0XI";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@api-thegames.q1zdh.mongodb.net/?retryWrites=true&w=majority&appName=api-thegames`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;