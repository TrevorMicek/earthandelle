import React from 'react';


const UseFetch = (quantity) => {
    let formData = {
        'items': [{
         'id': 42980611948783,
         'quantity': quantity
         }]
       };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}
  export default UseFetch;