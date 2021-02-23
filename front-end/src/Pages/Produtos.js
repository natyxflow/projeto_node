import {useState, useEffect} from 'react';
import Produto from '../Components/Produto';
import {Container, Row} from 'react-bootstrap';

const Produtos = () => {

const [produtos, setProdutos] = useState([]);

useEffect(() => {
    async function fetchData() {
    const resposta = "http://localhost:3333/produtos";
    const dados = await fetch(resposta);
    setProdutos(await dados.json);
    } fetchData()
    }, []);
    
    return (
        <Container>
            <h1>Produtos</h1>
            <br></br>
            <Row>
            {produtos && produtos.map(item => <Produto key={item.id} imagem={item.imagem} nome={item.descricao} preco={item.preco} categoria={item.categoria} />)}
            </Row>
        </Container>
        );
    };

export default Produtos;