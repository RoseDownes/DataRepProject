import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePetAnimal = this.onChangePetAnimal.bind(this);
        this.onChangePetBreed = this.onChangePetBreed.bind(this);
        this.onChangePetName = this.onChangePetName.bind(this);
        this.state = {
            animal: '',
            breed: '',
            name: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.animal}, ${this.state.breed} , ${this.state.name}`);

        const pet = {
            animal: this.state.animal,
            breed: this.state.breed,
            name: this.state.name
        }
        //// Send data to the server, using axios.post
        axios.post('http://localhost:4000/api/pets', pet)
            .then()
            .catch();

        this.setState({
            animal: '',
            breed: '',
            name: ''
        })
    }
    onChangePetAnimal(e) {
        this.setState({
            animal: e.target.value
        })
    }
    onChangePetBreed(e) {
        this.setState({
            breed: e.target.value
        })
    }
    onChangePetName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Register An Animal!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Animal Notes: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.animal}
                            onChange={this.onChangePetAnimal}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Breed: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.breed}
                            onChange={this.onChangePetBreed}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangePetName}
                        />
                    </div>

                    <input type="submit" value="Add Pet" />
                </form>
            </div>
        );
    }
}