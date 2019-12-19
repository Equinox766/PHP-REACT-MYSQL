import React from 'react';
import Tableta from './Tableta';
export default class App extends React.Component {

    constructor() {
        super();
        this.state = ({
            db: []
        });
        this.recibirAutos();
    }


    recibirAutos() {
        fetch("http://localhost:81/crud-php-react/src/api/")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                });
            })
    }

    render() {
        return (
            <div >
                <Tableta arrayAutos={this.state.db}/>
            </div>
        );
    }
}