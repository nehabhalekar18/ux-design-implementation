export const setBooks = (books) => (dispatch) => {
  dispatch({
    type: "SET_BOOKS",
    payload: books,
  });
};
export const markBook=(id,readVal)=>(dispatch)=>{
    dispatch({
        type: "MARK_BOOK",
        payload: {id,readVal},
      });
}