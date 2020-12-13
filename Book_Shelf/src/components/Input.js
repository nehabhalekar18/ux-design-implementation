import React from "react";

class Input extends React.Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBookProps(this.state.title);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div>
        <label>Enter book name to add</label>
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Book"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
          style={{
            width: "220px",
            height: "24px",
            border: "1px solid rgba(0,0,0,0.7)",
            borderRadius: "5px",
          }}
        />
        <input
          type="submit"
          className="input-add"
          value="Add"
          style={{
            width: "auto",
            height: "24px",
            border: "1px solid rgba(0,0,0,0.7)",
            borderRadius: "5px",
            marginLeft:"2%"
          }}
        />
      </form>
      <hr></hr>
      </div>
    );
  }
}
export default Input;
