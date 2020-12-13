export default (state = {}, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "MARK_BOOK": {
      let _books = state.books;
      _books.map((book) => {
        if (book.id === action.payload) book.isRead = true;
      });
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
