import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TopNavVar from '../components/TopNavVar';

class BupHeader extends React.Component{
    render() {
        return <Container>
            
            <Row>
                <Col sm={0.5}></Col>
                <Col>
                    <Nav className="justify-content-end" >
                        <Nav.Item>
                                <Button variant="outline-primary" className="m-2 pl-4 pr-4" size="sm">LOGIN IN</Button>
                        </Nav.Item>
                        <Nav.Item>
                                <Button variant="primary" className="m-2 pl-4 pr-4" size="sm">SIGN UP</Button>
                        </Nav.Item>
                        <Nav.Item>

                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={0.5}></Col>
            </Row>
            <Row>
                <Col sm={0.5}></Col>
                <Col>
                    <TopNavVar></TopNavVar>
                </Col>
                <Col sm={0.5}></Col>
            </Row>
            
        </Container>
    }
}



export default BupHeader;