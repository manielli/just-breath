import React from 'react';

export default class BreathTimer extends React.Component {
  state = {
    incdec: -1,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.startstoppause === "started") {
      // this 👇 prevents default behaviour of componentWillReceiveProps
      if(nextProps.startstoppause != this.props.startstoppause) {
        this.timerID = setInterval( () => {
          this.setState({ 
            incdec: this.state.incdec * -1 
          })
          this.props.sendIncDec(this.state.incdec)
        }, this.props.duration * 1000 );
      } else {
        return null
      }
    }
    if(nextProps.startstoppause === "stopped" && nextProps.startstoppause != this.props.startstoppause) {
      clearInterval(this.timerID)
      this.setState({ 
        incdec: -1,
      });
      this.props.sendIncDec(-1)
    }
    if(nextProps.startstoppause === "paused" && nextProps.startstoppause != this.props.startstoppause) {
      clearInterval(this.timerID)
      this.setState({
        incdec: -1,
      });
      this.props.sendIncDec(-1)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return null;
  };
}
