import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext'
import ModalinCard from './ModalinCard'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Col,
} from "reactstrap";

//modela una tarjeta en el caso de agregar las ambientaciones
function OneCard({ topics }) {
    const aux = topics.imageUrl;
    const { toggleModal } = useContext(AppContext);
    return (
        <Col md="4">
            <div className="card">
                <div className="card-front">
                    <img src={aux} className="card-img-top" alt="Imagen de la tarjeta" />
                </div>
                <div className="card-back">
                    <div className="card-body">
                        <h5 className="card-title">{topics.tittle}</h5>
                        <p className="card-text">{topics.body}</p>
                    </div>
                </div>
                <CardFooter className="text-center">
                    <Button
                        className="btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={toggleModal}
                    >ver más
                    </Button>
                </CardFooter>
                <ModalinCard /> 
            </div>
            {/*<Card className="">
                <div className="">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img 
                            className='imgCards'
                            alt={topics.tittle}
                            src={aux}
                        />
                    </a>
                </div>
                <CardBody >
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author" >
                            <CardTitle tag="h4">{topics.tittle}</CardTitle>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        {topics.body}
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                    <Button
                        className="btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={toggleModal}
                    >ver más
                    </Button>
                </CardFooter>
                <ModalinCard />
</Card>*/}
        </Col>
    )
}

export default OneCard