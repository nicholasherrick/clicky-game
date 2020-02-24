// Import react & react component
import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import presidents from './presidents.json';
import './App.css';

// Number variable start at zero
let correctClick = 0;
let topScore = 0;

class App extends Component {

  // These are the variables tracked for the app's state
  state = {
    presidents,
    correctClick,
    topScore

  };

  // This function runs whenever an image is clicked
  clicked = id => {
    // Set a variable to the state of the list of presidents
    const presidents = this.state.presidents;
    // Set a variable to that keeps tracked of already clicked presidents
    const clickedPresident = presidents.filter(president => president.id === id);

    // If statement checks if a an already clicked president was clicked again
    if (clickedPresident[0].clicked) {
      // Set our score and # of correct clicks to zero
      correctClick = 0
      // Loop through each president and reset them to unclicked
      presidents.map(president => president.clicked = false);
      // Reset the state of presidents and correct clicks, leaving the value of top score alone
      this.setState({ correctClick });
      this.setState({ presidents });
      // Shuffles order of the presidents displayed
      presidents.sort(function (a, b) { return .5 - Math.random() });
      // If the click was correct, checks if the score is less than 11
    } else if (correctClick < 11) {
      // Sets the president clicked value of the clicked on president to true
      clickedPresident[0].clicked = true;
      // Increment one to the score
      correctClick++;
      // Checks if the current score beat the top score
      if (correctClick > topScore) {
        // If it did, set the new top score equal to the current score
        topScore = correctClick;
        // Update the state of top score
        this.setState({ topScore });
      }
      // Update the rest of state variables
      this.setState({ presidents });
      this.setState({ correctClick });
      // Shuffle the images
      presidents.sort(function (a, b) { return .5 - Math.random() });
      // This section will run if the user scores all 12 points
    } else {
      clickedPresident[0].clicked = true;
      // Resets the score/correct clicks
      correctClick = 0;
      // Max out the top score
      topScore = 12;
      // update state
      this.setState({ topScore });
      // reset all the clicked values back to false
      presidents.map(president => president.clicked = false);
      // Updates state variables
      this.setState({ presidents });
      this.setState({ correctClick });
      // Shuffle the images
      presidents.sort(function (a, b) { return .5 - Math.random() });
    }
  };
  // Render all the components on the page
  render() {
    return (
      <Wrapper>
        {/* Passes in state of scores to the score trackers in the nav bar as props */}
        <Nav topScore={this.state.topScore} score={this.state.correctClick} />
        <Header>United States Presidents</Header>
        <div className="container row mx-auto">
          {/* Maps through each president renders each one as another image card */}
          {presidents.map(president => (
            <ImageCard
              // Props
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
