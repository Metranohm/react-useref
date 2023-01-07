import React from 'react';

class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      names: [...this.state.names, this.state.inputValue],
      inputValue: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NameList;