import $ from 'jquery'

export default function addProductToInventory(props) {
  const URL = 'http://shoppingcartapi.herokuapp.com/api/v1/products'
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      product: props
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'ADD_PRODUCT_TO_INVENTORY',
      payload: response
    }
  })
}
