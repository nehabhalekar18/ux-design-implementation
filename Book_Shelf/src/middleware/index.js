const forbiddenStatusCode = ["T", "F"];

export function forbiddenStatusMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      console.log(action.type);
      if (action.type === "MARK_BOOK") {
          console.log(action.payload)
        if (typeof action.payload.readVal === "string") {
          console.log("Hey! something is wrong!");
          return dispatch({type: 'INVALID_STATUS',payload:action.payload.id});
        }
      }
      return next(action);
    };
  };
}
