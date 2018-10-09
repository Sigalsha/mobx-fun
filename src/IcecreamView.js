import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from "mobx";
import './IceCreamView.css'
import iceCream from './iceCream.svg'

@inject("store")
@observer
class IcecreamView extends Component {

  @observable iceCreamToEdit = { flavor: this.props.flavor, color: this.props.color, _id: this.props._id }
  displayUpdate = { display: false }

  handleUpdate = () => {
    this.props.store.updateIceCream(this.iceCreamToEdit, this.props.i)
  }

  handleDelete = () => {
    this.props.store.deleteIceCream(this.props.i)
  }

  handleEdit = () => {
    this.displayUpdate.display = true;
  }

  handleInputChange = (event) => {
    this.iceCreamToEdit[event.target.name] = event.target.value
  }

  addComment = () => {
  }

  render() {
    return (
      <li className="li-con">
        <span className="li-text">{this.props.flavor} - {this.props.color}</span>
        <img className="li-image" src={iceCream} alt="icecream" />
        <div className="update-con">
          <span className="li-header">flavor:</span><input className="input" type="text" onChange={this.handleInputChange} name="flavor" value={this.iceCreamToEdit.flavor} ></input>
          <span className="li-header">color:</span><input className="input" type="text" onChange={this.handleInputChange} name="color" value={this.iceCreamToEdit.color}></input>
          <input className="btn" type="button" onClick={this.handleUpdate} value="update"></input>
          <input className="btn" type="button" onClick={this.handleDelete} value="delete"></input>
        </div>
      </li>
    );
  }
}

export default IcecreamView;