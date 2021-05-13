import React from "react";

// reactstrap components
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


  const Cards = (props) => {
    return (
      <div className="container" >
          <div className="row">
              <h1>Recetas</h1>
          </div>
          <div className="row">
              <div className="col-4">
              <Card>
          <CardImg top width="100%" src={require("assets/318x180.svg")} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
              </div>
              <div className="col-4">
              <Card>
          <CardImg top width="100%" src={require("assets/318x180.svg")} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
              </div>
              <div className="col-4">

        <Card>
          <CardImg top width="100%" src={require("assets/318x180.svg")} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
              </div>
          </div>
        
    
      </div>
    );
  };
  
  export default Cards;