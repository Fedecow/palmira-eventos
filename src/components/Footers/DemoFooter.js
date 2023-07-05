/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Casa de eventos, Funes, Santa Fe.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
