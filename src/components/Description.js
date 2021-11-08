import React, { Component } from 'react'
import logo from "../images/Illustration2.png"
import vector from "../images/Vector.png"
import "../scss/custom.scss"

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-lg-7 leftSide"  >
                        <img src={logo} width="85%" />
                    </div>

                    <div className="col-lg-5 rightSide" style={{marginTop: 75}} >
                        <p class="title" >We Provide Many Features You Can Use</p>
                        <p className="subTitle" >You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <div className="order_choice"  >
                            <img src={vector} width="25" height="25" style={{marginRight: 20}} />
                            <p>Powerfull online protection.</p>
                        </div>

                        <div className="order_choice" >
                            <img src={vector} width="25" height="25" style={{marginRight: 20}} />
                            <p>Internet without borders.</p>
                        </div>

                        <div className="order_choice" >
                            <img src={vector} width="25" height="25" style={{marginRight: 20}} />
                            <p>Supercharged VPN</p>
                        </div>

                        <div className="order_choice" >
                            <img src={vector} width="25" height="25" style={{marginRight: 20}} />
                            <p>No specific time limits.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}
