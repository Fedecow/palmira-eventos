import React from 'react'
import { CardGroup, Container } from 'reactstrap';
import AccordionLandscape from '../Views/AccordionLandscape'
//Componente correspondiente a la tarjeta de espacios
function Spaces() {
    return (
    <Container className="text-center background">
        <div>
            <h1 className='Ambientaciones'>Espacios</h1>
            <CardGroup>
                <AccordionLandscape/>
            </CardGroup>
        </div>
    </Container>
    )
}

export default Spaces