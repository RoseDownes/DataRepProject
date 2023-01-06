import React from "react";
import { Pets } from "./pets";
import axios from "axios";

export class Animals extends React.Component {

    //constructor
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }


    componentDidMount() {
        axios.get("http://localhost:4000/api/pets")
            .then((response) => {
                this.setState({
                    pets: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    ReloadData() {
        //axios makes a http request and gets a response
        axios.get("http://localhost:4000/api/pets")
            //call back function
            .then((response) => {
                this.setState({
                    pets: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    state = {
        pets: [

        ]
    }

    render() {
        return (
            <div>
                <h3>Hello here are my Animals </h3>
                <Pets pets={this.state.pets} ReloadData={this.ReloadData}></Pets>
            </div>
        );
    }
}