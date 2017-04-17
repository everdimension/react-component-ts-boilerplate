import * as React from 'react';
const s = require<any>('./styles.css');

export interface UpdaterFunc {
  (state: ButtonState, props: ButtonProps): number;
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
  handleClick() {
    if (this.props.countUpdater) {
      this.setState(this.props.countUpdater);
    }

    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick} className={s.button}>
        {this.state.count}
        <br />
        {this.props.text}
      </button>
    );
  }
}
