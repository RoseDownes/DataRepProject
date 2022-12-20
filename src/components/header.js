import React from "react";
import Badge from 'react-bootstrap/Badge';

export class Header extends React.Component {
    render() {
        return (
            <h1>
                <Badge bg="secondary">Rose's Vets</Badge>
            </h1>
        );
    }
}