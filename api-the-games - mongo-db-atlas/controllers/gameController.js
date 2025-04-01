import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    // Desestruturação
    // Capturando valores
    const { title, year, price, descriptions } = req.body;
    // Cadastrando no banco
    await gameService.Create(title, year, price, descriptions);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.status(400); // Código 400 (BAD REQUEST)
      // Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. " });
  }
};

// Função para alterar o jogo
const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      // Desestruturação
      const { title, year, price, descriptions } = req.body;
      gameService.Update(id, title, year, price, descriptions);
      res.sendStatus(200) // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400) // Código 400 (Bad request): Requisição mal formada
    }
    res.status(500).json({ error: "Erro interno do servidor. " });
  } catch (error) {
    console.log(error);
  }
};

// Função para listar um único jogo
const getOneGame = async(req,res) => {
  try{
    if (ObjectId.isValid(req.params.id)){
      const id = req.params.id
      const game = await gameService.getOne(id)
      if(!game) {
        res.status(404) // Código 404: (NOT FOUND) - Não encontrado
      } else {
        res.status(200).json({game})
      }
    } else {
      res.sendStatus(400) // Código 400: (BAD REQUEST) 
    }
  } catch(error){
    console.log(error)
  }
}

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame};
