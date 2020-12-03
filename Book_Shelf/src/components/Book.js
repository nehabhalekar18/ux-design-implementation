import React from "react";
class Book extends React.Component {
  render() {
    //  console.log('Props Book:', this.props)

    const { isRead, id, title } = this.props.book;
    return (
      <li className="book-item" style={{ "list-style-type": "none" }}>
        <input
          type="checkbox"
          checked={isRead}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <span>{title}</span>

        <button
          onClick={() => this.props.deleteBookProps(id)}
          style={{ marginLeft: "2%" }}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Book;
