import React from "react";
import axios from "axios";

export class DogFacts extends React.Component {
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonBlob/1061380458578984960')
            .then(response => {
                this.setState({ facts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    state = {
        facts: []
    };

    render() {
        return (
            <div>
                <h2>Random Fact!!</h2>
                <h3>
                    {this.state.facts.map(fcts => fcts.fact)[Math.floor(Math.random() * 430)]}
                </h3>
            </div>
        );
    }
}
