import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TodosPage from './TodosPage';
import PostsPage from './PostsPage';

const RouterPage = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" className="py-3">
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Link to="/">Home</Link>
                            <Link to="/posts">게시글</Link>
                            <Link to="/todos">할일목록</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/todos" component={TodosPage} />
                <Route path="/posts" component={PostsPage} />
            </Switch>
        </>
    )
}

export default RouterPage