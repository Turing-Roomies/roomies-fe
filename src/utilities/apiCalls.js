export const getUsers = async () => {
    try {
        const response = await fetch('https://animechan.vercel.app/api/random')
        const checkedResponse = await checkResponse(response)
        return checkedResponse
    } catch (err) {
        throw Error(err.message)
  }
}

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  }
  handleStatusError(response.status)
}

const handleStatusError = status => {
  if (status === 404) {
    throw Error('Sorry, page not found!')
  }
  if (status === 500) {
    throw Error('Sorry, this page isn\'t working!')
  }
  throw Error('Sorry, something went wrong!')
}
