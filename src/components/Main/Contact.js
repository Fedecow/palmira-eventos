import { useContext, useState } from "react";
import { AppContext } from '../Context/AppContext'
import React from 'react';

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

//Componente de contacto
function Contact() {
 const { createComent, Coment } = useContext(AppContext);
 const [name, setname] = useState(" ");
 const [email, setemail] = useState(" ");
 const [message, setmessag] = useState(" ");

    const handleSubmit = (e) => {
      e.preventDefault();
      createComent(name, email, message);
      setname(" ");
      setemail(" ");
      setmessag(" ");
      alert(Coment.name);
    }
    
  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Contactanos</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md="6">
                  <label>Name</label>
                  <InputGroup onChange={(e) => setname(e.target.value)}
                    value={name}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup onChange={(e) => setemail(e.target.value)}
                    value={email} >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <label>Message</label>
              <Input onChange={(e) => setmessag(e.target.value)}
                    value={message}
                placeholder="Tell us your thoughts and feelings..."
                type="textarea"
                rows="4"
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button type="submit" className="btn-fill" color="danger" size="lg">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    
    </div>
  )
}

export default Contact