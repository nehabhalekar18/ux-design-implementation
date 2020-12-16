import React from "react";
import { connect } from "react-redux";
import { markBook, setBooks } from "../actions/index";

let readId = [];
const mapStateToProps = (state) => ({
  ...state,
  books: state.reducers.books,
  result: state.reducers.result,
  readID: state.reducers.readID,
});

const mapDispatchToProps = (dispatch) => ({
  markBook: (id, readVal) => dispatch(markBook(id, readVal)),
});

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { readBookId: null };
    this.markRead = this.markRead.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updateID = this.updateID.bind(this);
  }
  markRead = (id, readVal) => {
    this.props.markBook(id, readVal);
    //  this.updateID();
  };
  updateID = () => {
    console.log(this.props.readID);
    readId.push(this.props.id);
    this.setState({ readBookId: readId });
    console.log("READID::", readId);
  };
  removeBook = (id) => {
    this.props.deleteBookProps(id);
  };
  render() {
    return (
      <div>
        <br />

        {this.props.books ? (
          <table>
            <thead>
              <tr>
                <td>Book ID</td>
                <td>Book Name</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((el) =>
                this.props.readID ? (
                  this.props.readID.map((bookID) =>
                    bookID === el.id ? (
                      <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>
                          <strike>{el.title}</strike>
                        </td>
                        <td>
                          <button
                            type="submit"
                            onClick={() => this.markRead(el.id, el.isRead)}
                          >
                            Marked Read : {el.isRead.toString()}
                          </button>
                        </td>
                        <td>
                          <button
                            type="submit"
                            onClick={() => this.removeBook(el.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td>
                          <button
                            type="submit"
                            onClick={() => this.markRead(el.id, el.isRead)}
                          >
                            Marked Read : {el.isRead.toString()}
                          </button>
                        </td>
                        <td>
                          <button
                            type="submit"
                            onClick={() => this.removeBook(el.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>
                      <button
                        type="submit"
                        onClick={() => this.markRead(el.id, el.isRead)}
                      >
                        Marked Read : {el.isRead.toString()}
                      </button>
                    </td>
                    <td>
                      <button
                        type="submit"
                        onClick={() => this.removeBook(el.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              )}
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
