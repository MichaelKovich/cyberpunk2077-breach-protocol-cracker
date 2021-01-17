import { Component } from "react";

import { initialState } from "./constants";
import { Props, State } from "./types";
import styles from "./styles";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  _callViktorVector = () => {
    this.setState(initialState);
  };

  _renderReloadButton = () => {
    return (
      <button style={styles.reloadButton} onClick={this._callViktorVector}>
        RELOAD
      </button>
    );
  };

  _renderErrorText = () => {
    const { error } = this.state;

    let errorStack = null;
    if (error && error.stack) {
      errorStack = error.stack;
    }

    return (
      <div style={styles.errorContainer}>
        <div style={styles.flatlinedText}>FLATLINED</div>
        <div style={styles.reloadText}>Reload required</div>
        <div>{error}</div>
        <div style={styles.errorStackHeading}>ERROR STACK &gt;&gt;&gt;</div>
        <div>{errorStack}</div>
        {this._renderReloadButton()}
      </div>
    );
  };

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return this._renderErrorText();
    }

    return children;
  }
}

export default ErrorBoundary;
