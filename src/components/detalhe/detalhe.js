import React, { Component } from "react";
import Cliente from "../cliente/cliente";

class Detalhe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itens: [],
            isLoadead: false,
        }

    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api-desafio-rest.herokuapp.com/cliente/lista-clientes')
            .then(resultado => resultado.json())
            .then(dados => {
                this.setState({
                    isLoadead: true,
                    items: dados,
                })
            });
    }

    render() {
        var { isLoadead, items } = this.state;

        if (!isLoadead) {
            return <div> Carregando o serviço ....</div>
        }

        return (
            <div>
                {items.map(
                    item => (
                        <div className="container">
                            <div className="row">
                                nome:
                                <div className="col">
                                    {item.nome}
                                </div>
                                CPF:
                                <div className="col">
                                    {item.cpf}
                                </div>
                            </div>

                            <div className="row">
                                E-mail:
                                <div className="col">
                                    {item.email}
                                </div>
                                CEP:
                                <div className="col">
                                    {item.endereco.cep}
                                </div>
                            </div>

                            <div className="row">
                                Logradouro:
                                <div className="col">
                                    {item.endereco.logradouro}
                                </div>
                                Complemento:
                                <div className="col">
                                    {item.endereco.complemento}
                                </div>
                            </div>

                            <div className="row">
                                Bairro:
                                <div className="col">
                                    {item.endereco.bairro}
                                </div>
                                UF:
                                <div className="col">
                                    {item.endereco.uf}
                                </div>
                            </div>
                        </div>

                    )
                )}
            </div>
        )
    }
}

export default Detalhe;