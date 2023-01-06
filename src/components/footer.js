import React from "react";
import Carousel from 'react-bootstrap/Carousel';
export class Footer extends React.Component {

    render() {
        return (

            <div>


                <hr></hr>
                <Carousel variant="dark">
                    <Carousel.Item>

                        <img className="d-block w-100"
                            src="/images/dogcone.jpg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/catcone.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/dog-cone.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}