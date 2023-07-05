import React, { forwardRef } from 'react'
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

//Componente que cuenta la idea del lugar
function AboutUs() {
    return (
        <div className="section text-center">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="title">Sobre nosotros</h2>
                        <h5 className="description">
                            En Palmira contamos con espacios recreativos para chicos y adultos, areas de esparcimiento donde van a encontrar juegos al aire libre, inflables y mucho mas. Contamos tambien con un amplio salon con mesas para que compartas los mejores momentos  
                        </h5>
                        <br />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-album-2" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">Beautiful Gallery</h4>
                                <p className="description">
                                    Spend your time generating new ideas. You don't have to
                                    think of implementing.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-bulb-63" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">New Ideas</h4>
                                <p>
                                    Larger, yet dramatically thinner. More powerful, but
                                    remarkably power efficient.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-sun-fog-29" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">Delightful design</h4>
                                <p>
                                    Find unique and handmade delightful designs related items
                                    directly from our sellers.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default React.forwardRef(AboutUs);