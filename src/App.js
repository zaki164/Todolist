import Additem from "./components/Additem/Additem";
import Todoitems from "./components/Todoitems/Todoitems";
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    items : 
    [
      {id: 1, name: "Ahmed", age: 22},
      {id: 2, name: "Mohammed", age: 23},
      {id: 3, name: "Abdo", age: 24}
    ]
  }

  deleteitem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})

    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id)
    // items.splice(i, 1)
    // this.setState({items})
  }

  additem = (item) => {
      item.id = Math.random();
      let items = this.state.items;
      items.push(item)
      this.setState({items})
  }
    
    // additem = (item) => {
    //   item.id = Math.random();
    //   let items = [...this.state.items, item];
    //   this.setState({items})
    // }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todolist</h1>
        <Todoitems items={this.state.items} deleteitem={this.deleteitem}/>
        <Additem additem={this.additem}/>
      </div>
    )
  }
}
