import React from 'react'
import {
    Container,
    Card,
    CardImgOverlay,
    CardImg,
    CardTitle,
} from "reactstrap";

//tarjeta que muestra los espacios
function Landscapes() {
    return (
        <Container className="text-left">
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/270?grayscale"
                    style={{
                        
                        height: 270
                        
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        Card Title
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </Container>
        
    )
}

export default Landscapes