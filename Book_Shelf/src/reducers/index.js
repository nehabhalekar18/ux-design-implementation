let readID=[];
export default (state = {}, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "MARK_BOOK": {
      console.log("STATE:: ", state);
      let _books = state.books;
      _books.map((book) => {
        if (book.id === action.payload.id && book.isRead != true){
          book.isRead = true;
          readID.push(book.id)
        }
      });
      return {
        ...state,
        readID: readID,
      };
    }
    case "INVALID_STATUS":
      console.log(action);
      return {
        ...state,
        result: "Invalid Input",
        id: action.payload,
      };
    default:
      return state;
  }
};
