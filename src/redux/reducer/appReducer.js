import { ALLDATA, ISLOGIN, TOGGLE } from "../types/type";

const Initial = { loginOrNot: false };
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case ALLDATA:
      return { name: action.data, age: action.age };
      // case TOGGLE:
      return { loginOrNot: !state.loginOrNot };
    case ISLOGIN:
      return { loginOrNot: !state.loginOrNot };
    default:
      return { ...state };
  }
};
