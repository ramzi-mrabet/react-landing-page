import React, { Component } from 'react';
import location from "../images/icons/location.svg";
import user from "../images/icons/user.svg";
import server from '../images/icons/Server.svg';
import '../scss/statistics.scss'

export default class Statistics extends Component {
    render() {
        return (
            <div className="container container-fluid statistics-container p-5 w-100">
            <div className="row justify-content-center" >

                <div className="col-12 col-md-4 mb-5  mb-md-0 element ">
                    <div className="row d-flex justify-content-center w-100 smallCard">
                        <img src={user} alt="none" />
                        <div className="ml-3">
                            <div style={{ fontWeight: 700 }}><b>90+</b></div>
                            <div>Users</div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-5  mb-md-0 ml-4 ml-md-0 element ">
                    <div className="row d-flex justify-content-center w-100 smallCard">
                        <img src={location} alt="none" />
                        <div className="ml-3">
                            <div style={{ fontWeight: 700 }}><b>30+</b></div>
                            <div>Locations</div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 ">
                    <div className="row d-flex justify-content-center w-100">
                        <img src={server} alt="none" />
                        <div className="ml-3">
                            <div style={{ fontWeight: 700 }}><b>50+</b></div>
                            <div>Servers</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
