import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


export class PetAnimal extends React.Component {

    //constructor
    constructor() {
        super();
        this.DeletePet = this.DeletePet.bind(this);
    }
    DeletePet(e) {
        console.log("Clicked")
        e.preventDefault();
        axios.delete("http://localhost:4000/api/pet/" + this.props.pets._id)
            .then((res) => {
                this.props.ReloadData();
            })
            .catch();
    }


    render() {
        return (
            <div>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.pets.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.pets.animal}</Card.Title>
                        <Card.Text>
                            {this.props.pets.breed}
                        </Card.Text>
                        <Card.Footer>
                            <Link to={"/edit/" + this.props.pets._id} className="btn btn-primary">Edit</Link>
                            <Button variant="danger" onClick={this.DeletePet}> Delete</Button>

                        </Card.Footer>
                    </Card.Body>
                </Card>
     
            </div>
        );
    }
}