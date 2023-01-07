import React from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export class DogData extends React.Component {
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonBlob/1061397483820957696')
            .then(response => {
                this.setState({ dogdata: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    state = {
        dogdata: []
    };

    render() {
        return (
            <div>

                    {this.state.dogdata.map(
                        data => <div>
    
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Img variant="top" src={data.image.url} />
                                <Card.Body>    
                                    <Card.Text>
                                        {data.temperament}
                                    </Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Life Span:  {data.life_span}</ListGroup.Item>
                                        <ListGroup.Item>Height:  {data.height.metric}</ListGroup.Item>
                                        <ListGroup.Item>Weight: {data.weight.metric}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    )[Math.floor(Math.random() * 172)]}

            </div>
        );
    }
}
