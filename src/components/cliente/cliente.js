import React, {Component} from "react";
import { Link } from "react-router-dom"

class Cliente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itens: [],
            isLoadead: false,
        }
           
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api-desafio-rest.herokuapp.com/cliente/lista-clientes')
        .then(resultado => resultado.json())
        .then(dados =>{ 
            this.setState({
                isLoadead: true,
                items: dados,
            })
        });
    }

    render(){
        var {isLoadead, items} = this.state;

        if(!isLoadead){
            return <div> Carregando o serviço ....</div>
        }

        return(
            <div>
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Email</th>
                        <th scope="col">Detalhar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(
                        item =>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.email}</td>
                            <td><Link to="/detalhe">detalhar</Link></td>
                        </tr>
                        )
                    )};
                        
                </tbody>
                </table>
            </div>
        )
    }
}

export default Cliente;