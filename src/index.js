import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class HelloUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Ibrahim Jabb"
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <div className="main">
        Hello {this.state.username} <br />
        Change Name:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<HelloUser />, document.getElementById("root"));
