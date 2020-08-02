export function addStudent(data) {
  return (dispatch) => {
    console.log("IN ACTIONS" + dispatch);
    return dispatch({
      type: "ADD_STUDENT",
      payload: data,
    });
  };
}

export function deleteStudent(studentId) {
  console.log("DELETE");
  return (dispatch) => {
    return dispatch({
      type: "DELETE_STUDENT",
      payload: studentId,
    });
  };
}
