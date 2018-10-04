import React, { Component } from 'react';
import { ItemView } from './ItemView';
import { TableMain } from './Table';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItems: [],
            items: [
                { id: 1, name: 'Items-1', price: 10, qtd: 0, category: 'food' },
                { id: 2, name: 'Items-6', price: 20, qtd: 0, category: 'food' },
                { id: 3, name: 'Items-2', price: 20, qtd: 0, category: 'food' },
                { id: 4, name: 'Items-3', price: 30, qtd: 0, category: 'clothing' },
                { id: 5, name: 'Items-4', price: 30, qtd: 0, category: 'clothing' },
                { id: 6, name: 'Items-5', price: 2, qtd: 0, category: 'clothing' }
            ]
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //     this.newArrayHandler = this.newArrayHandler.bind(this);
    }
    increment(e) {
        let items = this.state.items.map(item => {
            if (item.name === e.target.name)
                return Object.assign({}, item, { qtd: item.qtd + 1 })
            return item;
        })
        this.setState({ items })
    }
    decrement(e) {
        let items = this.state.items.map(item => {
            if (item.name === e.target.name)
                return Object.assign({}, item, { qtd: item.qtd - 1 })
            return item;
        })
        this.setState({ items })
    }
    handleSubmit(item) {
        let newItems = this.state.newItems
        if (newItems.length === 0) {
            newItems.push(item)
        } else {
            var found = false;
            newItems = newItems.map(prevItem => {
                if (prevItem.id === item.id)
                {
                    found = true;
                    return Object.assign({}, prevItem, item)
                }
                return prevItem;
            });
            !found && newItems.push(item)
        }
        this.setState({newItems})
    }
    render() {
        return (
            <div>
                <ItemView increment={this.increment}
                    decrement={this.decrement}
                    items={this.state.items}
                    handleSubmit={this.handleSubmit} />
                <TableMain newItems={this.state.newItems}
                    newArrayHandler={this.newArrayHandler} />
            </div>
        );
    }
}
export default Items;