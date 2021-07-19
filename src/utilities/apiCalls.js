import CurrentUserContext from '../Context/CurrentUserContext'
import { useContext } from 'react'

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://turing-roomies-be.herokuapp.com/api/v1/users"
    )
    const checkedResponse = checkResponse(response)
    return checkedResponse;
  } catch (err) {
    throw Error(err.message);
  }
}

export const postRequest = async (query, data) => {
  try {
    const response = await fetch(`https://turing-roomies-be.herokuapp.com/api/v1/${query}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const checkedResponse = checkResponse(response)
    return checkedResponse
  } catch (err) {
    throw Error(err.message)
  }
}

export const getCurrentUser = async (data) => {
  try {
    const response = await fetch(`https://turing-roomies-be.herokuapp.com/api/v1/${query}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const checkedResponse = checkResponse(response)
    return checkedResponse
  } catch (err) {
    throw Error(err.message)
  }
}

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  handleStatusError(response.status);
}

const handleStatusError = (status) => {
  if (status === 404) {
    throw Error("Sorry, page not found!");
  }
  if (status === 500) {
    throw Error("Sorry, this page isn't working!");
  }
  throw Error("Sorry, something went wrong!");
}
