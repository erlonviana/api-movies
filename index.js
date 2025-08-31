import express from "express";
const app = express();
import mongoose from "mongoose";
import Movie from "./models/Movies.js";

//Iniciando a conexão com o banco de dados
mongoose.connect("mongodb://127.0.0.1:27017/api-movies")

//Configurações do express
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

/*app.get("/", (req,res) => {
    const movies = [
        {
            title: "Superman",
            year: "2025",
            filmow_rating: "3.5",
            genre: "Action"
        },
        {
            title: "Pulp Fiction",
            year: "1994",
            filmow_rating: "4.4",
            genre: "thriller"            
        },
        {
            title: "A origem",
            year: "2010",
            filmow_rating: "4.4",
            genre: "Sci-Fy"            
        },
        {
            title: "Bacurau",
            year: "2019",
            filmow_rating: "4.3",
            genre: "Adventure"            
        }
    ];
    res.json(movies);
});*/

//Rodando API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}`);
})

//Criando o retorno da API
app.get("/", async (req, res) => {
    try{
        const movies = await Movie.find();
        res.status(200).json({movies: movies});
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor"})
        }
    }
)