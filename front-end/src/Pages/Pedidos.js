import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';


export default function PagePedidos() {
    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        produto: ""
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }
        const resposta = await fetch("http://localhost:8080/pedidos", opcoes);
        const dados = await resposta.json()
        console.log(dados);
    }

    return (
        
        <Row>
            <h1>Faça o seu Pedido!</h1>
            <div className="col-lg-6 col-md-6 mt-5 pt-5">
                <Form onChange={controleEnvio}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>
                
                    <Button variant="danger" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
       </Row>
    );
}