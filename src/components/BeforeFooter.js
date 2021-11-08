import '../scss/beforeFooter.scss';
import React, { Component } from 'react';


export default class BeforeFooter extends Component {
    render() {
        return (
            <div className="container beforeFooters">
                <div className="row " >

                    <div className="col-5  leftFooter">
                        <p className="firstTitle">Subscribe Now for Get Special Features!</p>
                        <p className="secondTitle">Let's subscribe with us and find the fun.</p>
                    </div>


                    <div className="  rightFooter" >
                        <button type="button" className="btn-outline">Get started</button>
                    </div>


                </div>
            </div>
        )
    }
}
