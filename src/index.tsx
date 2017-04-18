import * as React from 'react';
const icon = require<any>('./react-icon.svg');
require<any>('./styles.css');

export interface UpdaterFunc {
  (state: ButtonState, props: ButtonProps): ButtonState;
}

export interface ButtonProps {
  text: string;
  count: number;
  countUpdater?: UpdaterFunc;
}

export interface ButtonState {
  count: number;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.countUpdater) {
      this.setState(this.props.countUpdater);
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className="button">
        <img src={icon} className="button-image"/>
        {' '}
        {this.state.count}
        {' '}
        {this.props.text}
      </button>
    );
  }
}
