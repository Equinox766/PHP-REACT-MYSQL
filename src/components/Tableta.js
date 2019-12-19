import React from 'react';

export default class Tabela extends React.Component {
    render() {
        return (

            <div>
                <table className="TablaAutos">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>MARCA</td>
                            <td>MODELO</td>
                            <td>AÑO</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.arrayAutos.map(
                            row =>
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.Marca}</td>
                                    <td>{row.Modelo}</td>
                                    <td>{row.Ano}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}