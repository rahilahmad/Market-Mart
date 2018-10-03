import React, { Component } from 'react';
import { ItemView } from './ItemView';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                    {id:1, name: 'Items-1', price: 10, qtd: 1, category: 'food'},
                    {id:2, name: 'Items-6', price: 20, qtd: 1, category: 'food' },
                    {id:3, name: 'Items-2', price: 20, qtd: 1, category: 'food'},
                    {id:4, name: 'Items-3', price: 30, qtd: 1, category: 'clothing'},
                    {id:5, name: 'Items-4', price: 30, qtd: 1, category: 'clothing' }, 
                    {id:6, name: 'Items-5', price: 2, qtd: 1, category: 'clothing' }             
            ]
        }
        this.increment = this.increment.bind(this);
    }  
    increment(e){

     let items = this.state.items.map(item => {
           if(item.name === e.target.name)
                return Object.assign({}, item, {qtd: item.qtd + 1})
           return item;
        })
        this.setState({ items })
    }

  
    render() {
        
        return (
            <div>
                    <ItemView increment={this.increment} items={this.state.items} />
            </div>
        );
    }
}
export default Items;