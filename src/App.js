import React, { Component } from 'react';
// import './App.css';
import { observer, inject } from 'mobx-react';
import IceCreamForm from './IceCreamForm'
import IcecreamView from './IcecreamView'
import { observable, action } from "mobx";

@inject("store")
@observer
class App extends Component {

  getIceCreams =() => {
    const iceCreams = this.props.store.iceCreams
    return iceCreams.map((iceCream, i) => {
        return (<IcecreamView
            key={iceCream.id}
            flavor={iceCream.flavor} 
            color={iceCream.color}
            i={i}
            _id={iceCream._id} />)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Mobx</h1>
        </header>
        <div>{this.getIceCreams(this.props.store.iceCreams)}</div>
        <IceCreamForm />
      </div>
    );
  }
}


export default App;
