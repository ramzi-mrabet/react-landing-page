import '../scss/presentation.scss'
import React , {Component}from 'react'
import image from '../images/Illustration1.svg'
export default class Presentation extends Component {

    render() {
    return (

            <div className="container">
                <div className="row">


                    <div className="col-lg-5 " style={{ marginTop: 75 }} >
                        <div className="subContainer">
                            <div className="titlePres mb-4" ><h2><b>Want anything to be easy with MyVPN.</b></h2></div>
                            <p className="subTitlePres mb-4" >Provide a network for all your needs with ease and fun using MyVPN discover interesting features from us.</p>
                        </div>

                        <button type="button" className="btn-outline">Get started</button>

                    </div>

                    <div className="col-0 col-sm-7 leftSide"  >
                        <img src={image} alt="none" width="85%" alt="none" />
                    </div>
                </div>
            </div>

    )
}
}