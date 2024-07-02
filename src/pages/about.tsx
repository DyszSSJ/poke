import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import headerImg from "../assets/21004063.jpg";
import TrackVisibility from "react-on-screen";

const About: React.FC = () => {
    return (
        <Container className="contain-about py-4">
            <Card className="text-center card-about shadow-lg border-0">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                isVisible && (
                                    <div className="fade-in">
                                        <Card.Title className="display-4">Sobre Mí</Card.Title>
                                        <p className="text-justify fs-5 font-monospace">
                                            ¡Hola! Soy Axel David Téllez Álvarez, tengo 23 años y vivo en Chalco, Estado de México. Soy desarrollador Front End. Me gusta mantener un equilibrio en mi vida con pasatiempos como el gimnasio, ver series, salir con mi familia y jugar videojuegos. También me interesa la tecnología y estoy siempre explorando tendencias en el mundo del desarrollo web.
                                        </p>
                                    </div>
                                )
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center mt-3 mt-md-0">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                isVisible && (
                                    <div className="fade-in">
                                        <img
                                            src={headerImg}
                                            alt="Axel David Téllez Álvarez"
                                            style={{ borderRadius: "50%", width: "80%", maxWidth: "300px" }}
                                            className="img-fluid shadow-sm"
                                        />
                                    </div>
                                )
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default About;
