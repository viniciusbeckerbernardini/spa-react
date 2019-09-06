import React, {Component} from 'react';
import {getRevenue} from "../../services/components/revenueService";

class Revenue extends Component{
    constructor(properties){
        super(properties);
        this.state = {
            detalhamento:[]
        }
    }

    componentDidMount() {
        getRevenue().then(data => this.setState(data));
    }

    render(){
        return (
            <div>
                <h2 className="mt-2">Faturamento</h2>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Total por forma de pagamento
                            </div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.detalhamento.map((item,index)=> {
                                        return (
                                            <tr key={index}>
                                                <td>{item.descricao}</td>
                                                <td className="text-right">
                                                    {item.valor.toLocaleString("pt-BR",{style : "currency",currency:"BRL"})}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Revenue;