import React, { Component } from 'react';
import './App.css';
import iceCreamLogo from './ice-cream.svg'
import { observer, inject } from 'mobx-react';
import IceCreamForm from './IceCreamForm'
import IcecreamView from './IcecreamView'
import { observable, action } from "mobx";

@inject("store")
@observer
class App extends Component {

  getIceCreams = () => {
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
          <h1 className="App-title">Welcome to the ice cream shop</h1>
          <img className="App-logo" src={iceCreamLogo} alt="ice-cream" />
        </header>
        <div>{this.getIceCreams(this.props.store.iceCreams)}</div>
        <IceCreamForm />
        <IconCredit />
      </div>
    );
  }
}

const IconCredit = () => {
  return (
    <div id="iconCredit">
      Icons made by
       <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> 
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </div>
  )
}

export default App;
