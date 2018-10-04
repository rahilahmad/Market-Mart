import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const ItemView = (props) => {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    {props.items.map(item => {
                        return (
                            <Col md={4} key={item.id}>
                                <div className="text-center" >
                                    <h1>{item.name}</h1>
                                    <div className="col-md">
                                        <Button className="btn btn-success" id={item.id} name={item.name} onClick={props.increment} >+</Button>
                                        <span style={{ padding: "50px" }}>{item.qtd}</span>
                                        <Button className="btn btn-danger" id={item.id} name={item.name} onClick={props.decrement} >-</Button>
                                        <br />
                                        <Button className="btn btn-info" onClick={() => props.handleSubmit(item)}> Submit</Button>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
        </div>
    );
}
export { ItemView };