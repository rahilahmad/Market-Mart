import React from 'react';
import {  Table } from 'react-bootstrap';

const TableMain = (props) => {
    return (
        <div>
                
   {props.newItems.map(item => {
                return (
                    <Table striped bordered condensed hover key={item.id} >
                    <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.qtd}</td>
                        <td>{item.price}</td>
                    </tr>                        
                </tbody>
                </Table>                
                );
            })}
        </div>


    );
}
export { TableMain };









