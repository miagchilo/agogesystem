import React from "react";
import styled from "styled-components";
import { blink } from "../../styles/Keyframes";
import { color } from "../../styles/Theme";

const TypingStyle = styled.h1`
  text-align: center;
  color: ${color.black};
  .text {
    color: ${color.red};
    text-transform: uppercase;
  }
  #cursor {
    border-left: 0.1em solid ${color.red};
    animation: ${blink} 0.7s steps(1) infinite;
  }
`;

class Typer extends React.Component {
  state = {
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 150
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }
    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <TypingStyle>
        {this.props.heading}&nbsp;
        <span className="text">{this.state.text}</span>
        <span id="cursor" />
      </TypingStyle>
    );
  }
}
export default Typer;
