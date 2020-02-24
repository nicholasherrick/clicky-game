import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import presidents from './presidents.json';
import './App.css';

let correctClick = 0;
let topScore = 0;

class App extends Component {

  state = {
    presidents,
    correctClick,
    topScore
    
  };

  clicked = id => {
    const presidents = this.state.presidents;
    const clickedPresident = presidents.filter(president => president.id === id);

    if (clickedPresident[0].clicked) {
      correctClick = 0
      presidents.map(president => president.clicked = false);
      this.setState({correctClick});
      this.setState({presidents});
    } else if (correctClick < 11) {
      clickedPresident[0].clicked = true;
      correctClick++;

      if (correctClick > topScore) {
        topScore = correctClick;
        this.setState({topScore});
      }

      presidents.sort(function(a, b) {return .5 - Math.random()});

      this.setState({presidents});
      this.setState({correctClick});
    } else {
      clickedPresident[0].clicked = true;
      correctClick = 0;

      topScore = 12;
      this.setState({topScore});
      
      presidents.map(president => president.clicked = false);

      presidents.sort(function(a, b) {return .5 - Math.random()});

      this.setState({presidents});
      this.setState({correctClick});
    }
  };

  render() {
    return (
      <Wrapper>
        <Nav topScore={this.state.topScore} score={this.state.correctClick} />
        <Header>United States Presidents</Header>
        <div className="container row mx-auto">
            {presidents.map(president => (
              <ImageCard
                clicked={this.clicked}
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
