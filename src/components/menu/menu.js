import React, { Component } from 'react'

class Menu extends Component{

    render(){
        return (
            <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Desafio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;