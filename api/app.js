const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Pedidos');
const Pedido = mongoose.model('Pedido');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/fullstackeletro', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizada com sucesso: " + err);
})

// app.get('/pedidos', async (req,res) => {
//     await Pedido.find({}).then((pedidos) => {
//         return res.json({
//             error: false,
//             pedidos
//         });
//     }).catch((err) => {
//         return res.status(400).json({
//             error: true,
//             message: "Nenhum registro encontrado!"
//         });
//     });

// });

app.post('/pedidos', async (req,res) => {
    await Pedido.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Pedido não cadastrado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Pedido cadastrado com sucesso!"
    });
});

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});