import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Home.css'; 

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} className="bg-image-col">
          <a href="https://wa.me/+524922009694" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="WhatsApp" 
             className="whatsapp-btn">
            <i className="fab fa-whatsapp"></i> Mandanos un mensaje por WhatsApp.
          </a>
          <p className='info-text'>No vendemos, Compramos!</p>
          <h3 className='bienvenido-text'>Bienvenido.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
