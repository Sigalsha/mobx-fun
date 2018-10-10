import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import { observable, action } from "mobx";
import '../styles/IceCreamForm.css'

@inject(allStores => 
    ({ addIceCream: allStores.store.addIceCream }))
@observer
class IceCreamForm extends Component {
  
    @observable iceCream = {flavor: "", color: ""}
    
    handleClick = (e) => {
        this.props.addIceCream(this.iceCream.flavor, this.iceCream.color)
        this.iceCream = {flavor: "", color: ""}
    }

    @action handleInputChange = (event) => {
        this.iceCream[event.target.name] = event.target.value
    }

    render() {
      return (
        <div className="container">
            Add flavor:<input type="text" onChange={this.handleInputChange} name="flavor" value={this.iceCream.flavor} ></input>
            Add color:<input type="text" onChange={this.handleInputChange} name="color" value={this.iceCream.color}></input>
            <input  className="btn" type="button" onClick={this.handleClick} value="submit"></input>
        </div>
      );
    }
}
  

// <div>
// <input type="text" onChange={this.handleInputChange} name="flavor" value={iceCream.flavor} /> -
// <input type="text" onChange={this.handleInputChange} name="color" value={iceCream.color} />
// <input type="button" onClick={this.handleEditClick} value="submit" />
// </div>


export default IceCreamForm;