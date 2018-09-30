import React, {Component} from "react";
import "./GameMessage.css";

class GameMessage extends Component {

    state = {
        message: "",
        animating: false
    }

    // function runs on every state change
    componentDidUpdate(prevProps) {

      // deconstruct score and topScore from the pervious state
      const {score, topScore} = prevProps
      let message = "";

      // change message if user guess correclty or incorrectly
      if (score === 0 && topScore === 0) {
        message = "";
      } else if (score !== 0 && topScore > 0) {
        message = "correct";
      } else {
        message = "incorrect";
      }

      // set the state with the new message if the score changes, 
      // or the message and state message are not equal
      if (score !== this.props.score || message !== this.state.message) {
        this.setState({
          message: message,
        });
        console.log(this.state);
      }
  
    }

    // change the display message based on the message state
    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "You guessed correctly!";
        case "incorrect":
          return "You guessed incorrectly!";
        default:
          return "Click a character to begin!";
        }
    };

    // add animation class when animateClass state updates
    // animations from aniamte css library
    addAnimation = () => {
      let animation = ""
      switch (this.state.message) {
        case "correct":
          animation = "animated swing"
          return animation;
        case "incorrect":
          animation = "animated shake";
          return animation;
        default:
          return animation;
        }
        
    }

    render() {
        return(
          <li className={this.addAnimation()} id="gameMessage" >{this.renderMessage()}</li>  
        );
    }
}

export default GameMessage;
