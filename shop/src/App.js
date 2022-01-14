import React, {useState} from "react";
import './App.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Data from "./data"

import {Link, Route, Switch} from "react-router-dom";
import Detail from "./Detail";

function App() {

    let [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">Shoushop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                            <Nav.Link> <Link to="detail">Detail</Link></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>


<Switch>
            <Route exact path="/">
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
            </Route>


            <Route exact path="/detail/:id">
                <Detail shoes={shoes}> </Detail>
            </Route>


            <Route path="/:id">

                <div>아무거나 적었을 때 보여주는 것</div>
        것   </Route>
</Switch>
            {/*컴포넌트로 가져오고 싶을 때*/}
            {/*<Route paht="/component" component={Modal}></Route>*/}



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
