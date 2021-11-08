import React, { Component } from 'react';
import '../scss/card.scss'
import vector from '../images/Vector.png'

export default class Card extends Component {
    render() {
        return (
            <div className=" col-lg-4 col-md-12 d-flex justify-content-center">
                <div className="card">
                
                <img src={this.props.card.img} className="img" />
                <p className="cardTitle" > {this.props.card.title} </p>
                {
                    this.props.card.contents.map((content) => (
                           
                         <div className="cardChoice d-flex justify-content-start "  >
                         <img src={vector} width="25" height="25" style={{marginRight: 20}} />
                         <p>{content}</p>
                        </div>
                    ))
                }
                
                <div className="priceBtn">
                    <p className="price" >{this.props.card.price}</p>
                    <button className="btnSelect"> Select </button>
                </div>

                </div>
            
            </div>
        )
    }
}
