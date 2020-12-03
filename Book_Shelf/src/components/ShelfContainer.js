import React from 'react';
import Header from './Header';
import {v4 as uuidv4} from 'uuid';
import Input from './Input';
import Books from './Books';
import "../style.css"
class ShelfContainer extends React.Component {
  state = {
    books: [
      {
        id: uuidv4(),
        title: 'Story Book 1',
        isRead: true,
      },
      {
        id: uuidv4(),
        title: 'Story Book 2',
        isRead: false,
      },
      {
        id: uuidv4(),
        title: 'Story Book 3',
        isRead: false,
      },
    ],
    book:null
  };

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

  // TO DO : Create teh Delete function and pass it over to the childe comp
// console.log(I am getting dleted)
addBook = (book) => {
  let bookArray=this.state.books
  let data={id:uuidv4(),title: book,
  isRead: true}
  bookArray.push(data)
  this.setState({books:bookArray})
}

deleteBookProps=(id)=>{
let bookArray=this.state.books
bookArray = bookArray.filter(function( obj ) {
  return obj.id !== id;
});
this.setState({books:bookArray})
}
componentDidMount() {
  const apiUrl = 'https://my-json-server.typicode.com/raliasadil/library/books';
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('This is your data', data));
}
  render() {
    return (
      <React.Fragment >
      <Header/>
      <div style={{'padding':'2%'}}>
        <Input addBookProps={this.addBook}/>
        <Books books={this.state.books}
         handleChangeProps={this.handleChange} deleteBookProps={this.deleteBookProps}></Books>
         </div>
      </React.Fragment>
    );
  }
}

export default ShelfContainer;
