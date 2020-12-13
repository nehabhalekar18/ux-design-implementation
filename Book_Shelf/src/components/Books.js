import React from "react";
import Book from "./Book";
import { connect } from "react-redux";
import {markBook} from "../actions/index"

const mapStateToProps = (state) => ({
  ...state,
  books: state.reducers.books,
});

const mapDispatchToProps = (dispatch) => ({
  markBook: (id) => dispatch(markBook(id)),
});

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.markRead = this.markRead.bind(this);
    this.removeBook=this.removeBook.bind(this);
  }
  markRead=(id)=> {
  this.props.markBook(id);
  }
  removeBook=(id=>{
    this.props.deleteBookProps(id)
  })
  render() {
    return (
      <div>
        <br />
        {this.props.books ? (
          <table>
            <thead>
              <th>Book ID</th>
              <th>Book Name</th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              {this.props.books.map((el) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>
                    <button type="submit" onClick={() => this.markRead(el.id)}>
                     Marked Read : {el.isRead.toString()}
                    </button>
                  </td>
                  <td><button type="submit" onClick={() => this.removeBook(el.id)}>
                     Remove
                    </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}
/* const mapStateToProps = (state) => ({
  books: state.reducers.result,
}); */
export default connect(mapStateToProps, mapDispatchToProps)(Books);
