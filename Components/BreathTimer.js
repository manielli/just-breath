import React from 'react';
export default class BreathTimer extends React.Component {
  state = {
    incdec: -1,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.startstoppause === "started" && nextProps.startstoppause != this.props.startstoppause) {
      this.timerID = setInterval( () => {
        this.setState({ 
          incdec: this.state.incdec * -1 
        })
        this.props.incdecUpdater(this.state.incdec)
      }, this.props.duration * 1000 );
    }

    if(nextProps.startstoppause === "stopped" && nextProps.startstoppause != this.props.startstoppause) {
      clearInterval(this.timerID)
      this.setState({ 
        incdec: -1,
      });
      this.props.incdecUpdater(-1)
    }

    if(nextProps.startstoppause === "paused" && nextProps.startstoppause != this.props.startstoppause) {
      clearInterval(this.timerID)
      this.props.incdecUpdater(this.state.incdec)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return null;
  };
}