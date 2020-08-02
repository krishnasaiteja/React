const initialstate = {
  students: [
    {
      id: 1,
      studentName: "student 1",
      studentDepartment: ".NET Team",
      phoneNo: "123",
      CGPA: "8",
      email: "cat@redishmail.com",
    },
    {
      id: 2,
      studentName: "student 2",
      studentDepartment: "Mobile Team",
      phoneNo: "456",
      CGPA: "8.8",
      email: "dad@yahoo.in",
    },
    {
      id: 3,
      studentName: "student 3",
      studentDepartment: "Design Team",
      phoneNo: "789",
      CGPA: "8.8",
      email: "zysc@gmail.com",
    },
  ],
};

const reducer = (state = initialstate, action) => {
  console.log(state.students);
  switch (action.type) {
    case "GET_STUDENT":
      return {
        ...state,
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
