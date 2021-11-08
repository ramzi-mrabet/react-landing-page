import React, { Component } from 'react'
import Card from './Card'

export default class CardsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nbCards: this.props.nbCards
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row " >
                    <div className=" supTitle col-lg-12 col-md-12 col-sm-6" >
                    Choose Your Plan
                    </div>
                    <div className="subTitle col-lg-12 col-md-12 col-sm-6">
                    Let's choose the package that is best for you and explore it happily and cheerfully.
                    </div>
                </div>
                <div className="row">
                {
                    this.props.cards.map((card) => (
                        <Card card={card}  />
                    ))
                }
                </div>
            </div>
        )
    }
}
