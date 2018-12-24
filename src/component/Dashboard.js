import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      cardItemToDisplay: [],
    }
  }

  componentDidMount = () => {
    axios.get('/api/items')
      .then(res => {
        console.log(res)
        this.setState({
          cardItemToDisplay: res.data
        })
      })

  }


  render() {
    let {cardItemToDisplay} = this.state;
    let itemsToDisplay = cardItemToDisplay.map((item)=>{
      return(
        <div>
          <img className='itemsToDisplay' src={item.img} alt=''></img>
          <span>{item.item_name}{item.price}{item.likes}</span>
        </div>
      )
    })
    return (
      <div className="App">

        {itemsToDisplay}
  
      </div>
    );
  }
}

