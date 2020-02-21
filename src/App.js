import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import presidents from './presidents.json';
import './App.css';

class App extends Component {

  state = {
    presidents: {
      clicked: false
    },
    score: 0,
    topScore: 0
  };

  clicked = () => {
    this.setState({ presidents: this.state.presidents.clicked === true });
  };

  render() {
    return (
      <Wrapper>
        <Nav></Nav>
        <Header>United States Presidents</Header>
        <div className="container row mx-auto">
            {presidents.map(president => (
              <ImageCard 
                id={president.id}
                key={president.id}
                name={president.name}
                image={president.image}
              />
            ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
