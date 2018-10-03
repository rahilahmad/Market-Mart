import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const ItemView = (props) => {
   return(
    <div>
    <Grid>
        <Row className="show-grid">
        { props.items.map(item => {
            return (
                <Col md={4} key={item.id}>
                <div className="text-center" >
                    <h1>{item.name}</h1>
                    <div className="col-md">
                        <Button className="btn btn-success" id={item.id} name={item.name} onClick={props.increment} >+</Button>
                        <input type="number" readOnly></input>
                        <span>{item.qtd}</span>
                        <Button className="btn btn-danger" id='1' >-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            );
        })}
            {/* <Col md={4}>
                <div className="text-center" >
                    <h1>Item-2</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number" readOnly></input>

                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-3</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number" readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-4</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number" readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-5</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number" readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-6</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number"readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-7</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number"readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-8</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number"readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center" >
                    <h1>Item-9</h1>
                    <div className="col-md">
                        <Button className="btn btn-success">+</Button>
                        <input type="number"readOnly></input>
                        <Button className="btn btn-danger">-</Button>
                        <br />
                        <Button className="btn btn-info">Submit</Button>
                    </div>
                </div>
            </Col> */}
        </Row>
    </Grid>
    </div>
   );
}
export { ItemView };