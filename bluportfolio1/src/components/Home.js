import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import './Home.css';
import Angular from './angular.png'
import Reactpic from './1200px-React-icon.svg.png'
import JS from './js.png'

class AppPage extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                collapse : false
            }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleNavbarClick(){
        this.setState({
            collapse: false
        });
    }
    render(){
        const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return (
            <div id="apppage">
                <Router>
                    <div>
                        <Navbar dark expand="md" fixed="top" scrolling>
                            <Container>
                                <NavbarBrand>
                                    <strong className="white-text">BM</strong>
                                </NavbarBrand>
                                <NavbarToggler onClick = { this.onClick } />
                                <Collapse isOpen = {this.state.collapse} navbar>
                                    <NavbarNav left>
                                        <NavItem active>
                                            <NavLink to="/home">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/about">About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#!">Portfolio</NavLink>
                                        </NavItem>
                                    </NavbarNav>
                                    <NavbarNav right >
                                        <NavItem>
                                            <FormInline waves>
                                                <div className="md-form my-0">

                                                </div>
                                            </FormInline>
                                        </NavItem>
                                    </NavbarNav>
                                </Collapse>
                            </Container>
                        </Navbar>
                        { this.state.collapse && overlay}
                    </div>
                </Router>
                <View>
                    <Mask className="d-flex justify-content-center align-items-center gradient">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">Blu Mays </h1>
                                    <hr className="hr-light"/>
                                    <h2>Front End Web Developer</h2>
                                    <h3>Denver, CO</h3>

                                </div>
                                <Col md="6" xl="5" className="mt-xl-5">
                                    <img src={Angular} className="Angular"/>
                                    <img src={Reactpic} className ="React"/>
                                    <img src={JS} className="JS"/>
                                </Col>
                            </Row>
                        </Container>
                    </Mask>
                </View>

                <Container>
                    <Row className="py-5">
                        <Col md="12" className="text-center">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default AppPage;
