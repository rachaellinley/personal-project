import Axios from "axios";


const initialState = {
  reviews: [],
  myReviews: [],
  loading: false
}

const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const USER_REVIEWS = "USER_REVIEWS";

export function getAllReviews() {
  return {
    type: GET_ALL_REVIEWS,
    payload: Axios.get("/api/reviews")
  }
}

export function addReview(review) {
  return {
    type: ADD_REVIEW,
    payload: Axios.post("/api/reviews", review)
  }
}

export function editReview(review_id, updated_review) {
  return {
    type: EDIT_REVIEW,
    payload: Axios.put(`/api/reviews/${review_id}`, updated_review)
  }
}

export function deleteReview(review_id) {
  return {
    type: DELETE_REVIEW,
    payload: Axios.delete(`/api/reviews/${review_id}`)
  }
}

export function userReviews() {
  console.log("GETTING REVIEWS");
  return {
    type: USER_REVIEWS,
    payload: Axios.get("/api/reviews/profile")
  }
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case `${GET_ALL_REVIEWS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_ALL_REVIEWS}_FULFILLED`: {
      console.log(payload.data)
      return {
        ...state,
        reviews: payload.data
      }
    }
    case `${ADD_REVIEW}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${ADD_REVIEW}_FULFILLED`: {
      console.log("review ran")
      return {
        ...state,
        myReviews: payload.data
      }
    }
    case `${USER_REVIEWS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
      case `${USER_REVIEWS}_FULFILLED`: {
        return {
          ...state,
          myReviews: payload.data,
          loading: false
        }
    }

    case `${EDIT_REVIEW}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }

    case `${EDIT_REVIEW}_FULFILLED`: {
      return {
        ...state,
        reviews: payload.data,
        loading: false
      }
    }
    case `${DELETE_REVIEW}_FULFILLED`: {
      console.log("ran delete")
      return {
          ...state,
          myReviews: payload.data
      }
    }
      
    default:
      return state;
  }
}