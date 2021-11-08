import React, { Component } from 'react';
import Logo from "../images/icons/Logo.svg";
import collapseIcon from "../images/icons/collapseIcon.svg";
import facebookLogo from "../images/icons/Facebook.svg";
import twitterLogo from "../images/icons/Twitter.svg";
import instagramLogo from "../images/icons/Instagram.svg";
import myVpn from "../images/icons/©2021MyVPN.svg";
import close from "../images/icons/close.svg";
import '../scss/header.scss'


 export default class Header extends Component {

    constructor () {
        super();

        this.state = {
          verif: false
        }
    }

    render() {
    return (
        <div >
            {
                this.state.verif === false ? (
                    <nav className="navbar navbar-expand-lg  pt-3 pb-5">
                        <a className="navbar-brand " href="#"
                        ><img src={Logo} /></a>
                        <button onClick={
                            () => {
                                this.setState({
                                  verif: true
                                })
                            }
                        } className="navbar-toggler" type="button">
                            <span > <img src={collapseIcon}
                            /></span>
                        </button>

                        <div className="collapse navbar-collapse pl-5" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto  pl-5">
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse ml-5 " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto ">
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#"><b>Sign In</b></a>
                                </li>
                                <li className="nav-item mr-4">
                                    <button type="button" className="btn btn-outline-primary pl-4 pr-4">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </nav >
                ) : (
                        <div className="sidebar pt-3 pl-3 pr-3 m-10 "  >
                            <div className="d-flex justify-content-between mb-100 "   >
                                <div>
                                    <div className="d-flex justify-content-between mb-3" >
                                        <a className="navbar-brand" href="#"
                                        ><img src={Logo}
                                            /></a>
                                        <button onClick={
                                            () => {
                                                this.setState({
                                                  verif: !this.state.verif
                                                })
                                            }} className="navbar-toggler" type="button">
                                            <span > <img src={close}
                                            /></span>
                                        </button>
                                    </div>
                                    <div className="list-group list-group-flush">
                                        <a className="sidebar-element mb-2"
                                        >About</a
                                        >
                                        <a className="sidebar-element mb-2"
                                        >Features</a
                                        >
                                        <a className="sidebar-element mb-2"
                                        >Pricing</a
                                        >
                                        <a className="sidebar-element mb-2"
                                        >Testimonials</a
                                        >
                                        <a className="sidebar-element mb-2"
                                        >Help</a
                                        >
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex justify-content-center" >
                                                <a className="sidebar-element pt-2" href="#"><b>Sign In</b></a></div>
                                            <button type="button" className="btn btn-outline-primary pl-4 pr-4 sidebar-element-button ">Sign Up</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center mt-5 pt-5" >
                                            <img src={facebookLogo} />
                                            <img src={twitterLogo} />
                                            <img src={instagramLogo} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <img src={myVpn} />
                                        </div>
                                    </div>
                                </div>

                            </div >
                        </div >

                    )
            }


        </div>
      
    );

  }

}

