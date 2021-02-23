const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const { Schema} = mongoose;

const pedido = new Schema({
    nome: {
        type: String
    },
    endereco: {
        type: String
    },
    telefone: {
        type: String
    },
    produto: {
        type: String
    }
},{
    timestamps:true
});

mongoose.model('Pedido', pedido);