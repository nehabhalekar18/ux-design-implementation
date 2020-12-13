export const setBooks = (books) => (dispatch) => {
  dispatch({
    type: "SET_BOOKS",
    payload: books,
  });
};
export const markBook=(id)=>(dispatch)=>{
    dispatch({
        type: "MARK_BOOK",
        payload: id,
      });
}