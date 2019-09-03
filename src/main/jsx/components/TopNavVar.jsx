
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
                            width="60"
                            height="60"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#home">팀정보</Nav.Link>
                        <Nav.Link href="#link">Match</Nav.Link>
                        <Nav.Link href="#link">랭킹</Nav.Link>
                        <Nav.Link href="#link">이적시장</Nav.Link>
                        <Nav.Link href="#link">게시판</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    }

}

export default TopNavVar;