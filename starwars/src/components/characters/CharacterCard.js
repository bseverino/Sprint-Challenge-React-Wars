import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
  
const CharacterCard = props => {
    return (
        <Col xs="12" sm="6" md="4" lg="3">
            <Card body className="text-left character-card">
                <CardBody>
                <CardTitle className="character-title">{props.name}</CardTitle>
                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                <CardSubtitle>Birth year: {props.birthYear}</CardSubtitle>
                <CardSubtitle>Height: {props.height}cm</CardSubtitle>
                <CardSubtitle>Mass: {props.mass}g</CardSubtitle>
                <CardSubtitle>Eye color: {props.eyeColor}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;