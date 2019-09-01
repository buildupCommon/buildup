
import React from 'react';


import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


class TopNavVar extends React.Component{
    render() {
        return <Container>
            <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            src="../img/logo.svg"
                            width="120"
                            height="180"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><Button variant="outline-primary" size="lg">팀정보</Button></Nav.Link>
                        <Nav.Link href="#link"><Button variant="outline-primary" size="lg">Match</Button></Nav.Link>
                        <Nav.Link href="#link"><Button variant="outline-primary" size="lg">랭킹</Button></Nav.Link>
                        <Nav.Link href="#link"><Button variant="outline-primary" size="lg">이적시장</Button></Nav.Link>
                        <Nav.Link href="#link"><Button variant="outline-primary" size="lg">게시판</Button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    }

}

export default TopNavVar;