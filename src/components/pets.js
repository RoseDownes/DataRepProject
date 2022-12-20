import React from "react";
import { PetAnimal } from './petAnimal';

export class Pets extends React.Component {
    render() {
        return this.props.pets.map(
            (pets) => {
                return <PetAnimal pets={pets} key={pets._id} ReloadData={this.props.ReloadData}></PetAnimal>
            }
        );
    }
}