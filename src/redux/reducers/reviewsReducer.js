import Axios from "axios";

const initialState = {
  reviews: [],
  loading: false
}

const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const GET_REVIEWS_BY_USERNAME = "GET_REVIEWS_BY_USERNAME";

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

export function getAllReviewsByUsername(username) {
  return {
    type: GET_ALL_REVIEWS_BY_USERNAME,
    payload: Axios.get(`/api/reviews/${username}`)
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_REVIEWS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_ALL_REVIEWS}_FULFILLED`: {
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
      return {
        ...state,
        reviews: payload.data
      }
    }
    default:
      return state;
  }
}