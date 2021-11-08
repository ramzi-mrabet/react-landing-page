import './App.scss';
import React, { Component } from 'react';
import Header from './components/Header';
import Description from './components/Description';
import Footer from './components/Footer';
import CardsContainer from './components/CardsContainer';
import Presentation from './components/Presentation';
import Statistics from './components/Statistics';
import BeforeFooter from './components/BeforeFooter';
import free from './images/cards/Free.png';
import standard from './images/cards/Standard.png';
import premium from './images/cards/Premium.png';
import OneSignal from 'react-onesignal';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards : []
    }
  }

  componentDidMount () {

    this.setState({
      cards: [
        {
          title: "Free Plan",
          price: "Free",
          img: free,
          contents: ["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices"]
        },
        {
          title: "Standard Plan",
          price: "$9 / mo",
          img: standard,
          contents: ["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Works on All Devices","Connect Anyware"]
        },
        {
          title: "Premium Plan",
          price: "$12 / mo",
          img: premium,
          contents: ["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Works on All Devices","Connect Anyware","Get New Features"]
        }
      ]
    })
  }

  render() {
    return (
      <>
      <div className="container">
        <Header />
        <Presentation />
        <Statistics />
        <Description />
        <CardsContainer cards={this.state.cards} />
        <BeforeFooter />

      </div>

      <Footer />
</>
    )
  }
}
