import React from "react";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import Books from "./Books";
import "../style.css";
import axios from "axios";
import { connect } from "react-redux";
import { setBooks } from "../actions/index";

const mapStateToProps = (state) => ({
  ...state,
  books: state.reducers.books,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books)),
});
class ShelfContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      book: null,
    };
  }
  handleChange = (id) => {
    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === id) {
          book.isRead = !book.isRead;
        }
        return book;
      }),
    });
  };

  addBook = (book) => {
    let bookArray = this.props.books;
    let data = { id: uuidv4(), title: book, isRead: true };
    bookArray.push(data);
    this.props.setBooks(bookArray);
    this.setState({ books: bookArray });
  };

  deleteBookProps = (id) => {
    let bookArray = this.props.books;
    bookArray = bookArray.filter(function (obj) {
      return obj.id !== id;
    });
    this.props.setBooks(bookArray);
    this.setState({ books: bookArray });
  };

  setBooks = () => {
    this.props.setBooks(this.state.books);
  };
  async componentDidMount() {
    var res = await axios
      .get("https://my-json-server.typicode.com/raliasadil/library/books")
      .then((response) => {
        return response;
      });
    this.setState({ books: res.data }, this.setBooks);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        <div style={{ padding: "2%" }}>
          <Input addBookProps={this.addBook} />
          <Books
            books={this.state.books}
            handleChangeProps={this.handleChange}
            deleteBookProps={this.deleteBookProps}
          ></Books>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfContainer);
