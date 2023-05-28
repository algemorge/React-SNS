const initialState = {
  //   name: "zerocho",
  //   age: 27,
  //   password: "babo",

  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },

  post: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "boogiecho",
// };

// 사용자가 어떤 닉네임을 생성할지 모르니 동적으로 액션을 만들어놓음
// action creater
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };

// changeNickname("boogicho");
// {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho'
// }
// store.dispatch(changeNickname(""));

//(이전상태, 액션)=>다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
