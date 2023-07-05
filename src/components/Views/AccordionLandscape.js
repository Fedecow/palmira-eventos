import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Landscapes from './Landscapes';

//Contiene a las tarjetas de los espacios
function AccordionLandscape(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div style={{marginBottom: 10}}>
        <div onClick={() => setIsActive(!isActive)}>
          <div>
            <Landscapes />
          </div>
        </div>
        
      </div>
      <div style={{marginBottom: 10}}>
        <div onClick={() => setIsActive(!isActive)}>
          <div>
            <Landscapes />
          </div>
        </div>
        
      </div>
      <div style={{marginBottom: 10}}>
        <div onClick={() => setIsActive(!isActive)}>
          <div>
            <Landscapes />
          </div>
        </div>
      
      </div>
      <div style={{marginBottom: 10}}>
        <div onClick={() => setIsActive(!isActive)}>
          <div>
            <Landscapes />
          </div>
        </div>
    
      </div>
    </Container>
  );
}

export default AccordionLandscape;
