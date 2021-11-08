import React, { Component } from 'react';
import facebookLogo from "../images/icons/Facebook.svg";
import twitterLogo from "../images/icons/Twitter.svg";
import instagramLogo from "../images/icons/Instagram.svg";
import Logo from "../images/icons/Logo.svg";
import '../scss/footer.scss'

export default class Footer extends Component {

    render() {

        return (
            
            <div className=" footer-content p-4 ">
                <div className="container">
                    <div className="row toButtom">
                        
                    <div className="col-lg-6 col-md-12  ">
                        <div className="row">
                            <p className=" fs-18 Poppins-Bold"><img src={Logo} alt="none" className="logo footer-img" /></p>
                        </div>
                        <div className="row left-position">
                            <div className="fs-15 Poppins-Regular element ml-6">
                                <p><strong>MyVPN</strong> is a private virtual network that has</p> unique features and has high security.
                            </div>
                        </div>
                        <div className="row ">
                            <div className="fs-15 Poppins-Regular">
                                <img src={facebookLogo} className="footer-img" alt="none" />
                                <img src={twitterLogo} className="footer-img" alt="none" />
                                <img src={instagramLogo} className="footer-img" alt="none" />
                            </div>
                        </div>
                        <div><p></p></div>
                        <div className="row left-position">
                            <p className="fs-15 Poppins-Regular">©2021MyVPN</p>
                        </div>

                    </div>


                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ">
                        <h5 className="headin5_amrc col_white_amrc pt2">Product</h5>

                        <ul className="footer-ul ">
                            <li><a href="#">Download </a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Server</a></li>
                            <li><a href="#">Countries</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="headin5_amrc col_white_amrc pt2">Engage</h5>

                        <ul className="footer-ul">
                            <li><a href="#">LaslesVPN ? </a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="headin5_amrc col_white_amrc pt2 ">Earn Money</h5>

                        <ul className="footer-ul">
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Become Partner</a></li>

                        </ul>
                    </div>
                    </div>
                </div>
            </div>


        )
    }
}