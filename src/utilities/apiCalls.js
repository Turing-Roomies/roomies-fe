import CurrentUserContext from '../Context/CurrentUserContext'
import { useContext } from 'react'

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://turing-roomies-be.herokuapp.com/api/v1/users"
    );
    const checkedResponse = await checkResponse(response);
    return checkedResponse;
  } catch (err) {
    throw Error(err.message);
  }
};


// export const handleRoomieRequest = async (id) => {//currentUser's ID and requestedRoomie's id
//   const currentUser = useContext(CurrentUserContext)
//   try {
//     const response = await fetch(`https://turing-roomies-be.herokuapp.com/api/v1/users/${currentUser.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(id),//this is a request object that goes in roomies array
//       headers: {
//         'Content-Type': 'application.json'
//       }
//     })    
//   }
// }

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  handleStatusError(response.status);
};

const handleStatusError = (status) => {
  if (status === 404) {
    throw Error("Sorry, page not found!");
  }
  if (status === 500) {
    throw Error("Sorry, this page isn't working!");
  }
  throw Error("Sorry, something went wrong!");
};