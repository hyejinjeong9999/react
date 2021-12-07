import React, {useState} from "react";
import './App.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Data from "./data"

function App() {

    let [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Shoushop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>

            <div className="background">
                <h1>20% Season off</h1>
                <p>
                    내용내용
                </p>
                <p>
                    <Button variant="primary">Learm more</Button>
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {
                        /**
                         * a : 데이터 하나하나
                         * i : 숫자
                         */
                        shoes.map((a, i) => {
                            return <Card shoes={a}/>
                        })
                    }


                </div>
            </div>

        </div>
    );

    function Card(props) {
        return (
            <div className="col-md-4">
                <img src={props.shoes.src} width="100%"/>
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}</p>
            </div>
        )
    }

}

export default App;
