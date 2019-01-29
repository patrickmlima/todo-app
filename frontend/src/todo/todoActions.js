import axios from 'axios'

const URL = "http://localhost:3003/api/todos"

const changeDescription = event => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value
})

const search = (description) => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const searchParam = description ? `description__regex=/${description}/i` : ''
    axios.get(`${URL}?sort=-createdAt&${searchParam}`)
      .then(response => dispatch({ type: 'TODO_SEARCHED', payload: response.data }))
  }

  // const searchParam = description ? `description__regex=/${description}/i` : ''
  // const request = axios.get(`${URL}?sort=-createdAt&${searchParam}`)
  // return {
  //   type: 'TODO_SEARCHED',
  //   payload: request
  // }
}

const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
      .then(response => dispatch(clear()))
  }
}

const changeStatus = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: !todo.done })
      .then(response => dispatch(search()))
  }
}

const remove = (todo) => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(response => dispatch(search()))
  }
}

const clear = () => {
  return [
    { type: 'TODO_CLEAR' },
    search(),
  ]
}

export { changeDescription, search, add, changeStatus, remove, clear }
