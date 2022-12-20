import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [name, setName] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios
            .get("http://localhost:4000/api/pets/" + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setAnimal(response.data.animal);
                setBreed(response.data.breed);
                setName(response.data.name);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // need to create a function in a variable to handle the submit event on the form
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPet = {
            id: id,
            animal: animal,
            breed: breed,
            name: name,
        };

        axios.put("http://localhost:4000/api/pet/" + id, newPet).then((res) => {
            console.log(res.data);
            navigate("/animals");
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Animal: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Breed: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Pet" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}