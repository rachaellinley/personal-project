import Axios from 'axios';

const initialState = {
  user_id: null,
  username: "",
  password: "",
  first_name: "",
  loading: false
}

const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// action creators
export function getSession() {
  return {
    type: GET_SESSION,
    payload: Axios.get("/auth/user")
  }
}

export function registerUser(newUser) {
  return {
    type: REGISTER_USER,
    payload: Axios.post("/auth/register", newUser)
  }
}

export function loginUser(user) {
  console.log("LOGGING IN")
  return {
    type: LOGIN_USER,
    payload: Axios.post("/auth/login", user)
  }
}

export function logoutUser() {
  Axios.get("/auth/logout")
  return {
    type: LOGOUT_USER
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case `${GET_SESSION}_PENDING`: {
    //   console.log("pending")
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }
    case `${GET_SESSION}_FULFILLED`: {
    console.log("fulfilled")
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        first_name: payload.data.first_name,
        loading: false
      }
    }
    // case `${REGISTER_USER}_PENDING`: {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }
    case `${REGISTER_USER}_FULFILLED`: {
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.user,
        loading: false
      }
    }
    // case `${LOGIN_USER}_PENDING`: {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }
    case `${LOGIN_USER}_FULFILLED`: {
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.user,
        loading: false
      }
    }
    case LOGOUT_USER: {
      return {
        user_id: null,
        username: "",
        password: "",
        loading: false
      }
    }
    default:
      return state;
  }
}