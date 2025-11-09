import express from "express";
import cors from "cors";
const app = express();

// Dados servidos diretamente pelo código (sem MongoDB)

//Configurações do express
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
}));

// Rota esperada pelo frontend: GET /api/filmes
app.get("/api/filmes", (req, res) => {
  const filmes = [
    {
      id: 1,
      titulo: "Superman",
      diretor: "Richard Donner",
      ano: "2025",
      genero: "Ação",
      duracao: 143,
    },
    {
      id: 2,
      titulo: "Pulp Fiction",
      diretor: "Quentin Tarantino",
      ano: "1994",
      genero: "Thriller",
      duracao: 154,
    },
    {
      id: 3,
      titulo: "A Origem",
      diretor: "Christopher Nolan",
      ano: "2010",
      genero: "Sci-Fi",
      duracao: 148,
    },
    {
      id: 4,
      titulo: "Bacurau",
      diretor: "Kleber Mendonça Filho",
      ano: "2019",
      genero: "Aventura",
      duracao: 131,
    },
  ];
  res.json(filmes);
});

// Rodando API na porta 3001 para alinhar com o frontend
const port = 3001;
app.listen(port, (error) => {
    if(error){
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}`);
})
