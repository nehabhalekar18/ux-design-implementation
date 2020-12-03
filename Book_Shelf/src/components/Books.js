import React from 'react';
import Book from './Book';
class Books extends React.Component {
    render() { 
       // console.log('Props Books:', this.props)
      return (
        <div>
          <h3>Book List</h3>
          { 
            this.props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleChangeProps={this.props.handleChangeProps}
              deleteBookProps={this.props.deleteBookProps}
              addBookProps={this.props.addBookProps}
            />
          ))}
        </div>
      );
    }
  }
  
  export default Books;
  