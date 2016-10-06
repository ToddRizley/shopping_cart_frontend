import $ from 'jquery'

export default function fetchCurrentUser() {
  const URL = 'http://shoppingcartapi.herokuapp.com/api/v1/users'
  return $.ajax({
    url:URL,
    type:"POST"
  }).then( (response) => {
    return {
      type: 'FETCH_CURRENT_USER',
      payload: response
    }
  })
}
