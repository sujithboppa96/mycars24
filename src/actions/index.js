import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_articles';

export const fetchProducts = (dispatch,index=1, products=[]) => {
  let url;

    url = `https://node-sample-api.herokuapp.com/api/products?page=${index}`
  let response = products ? products: []
  axios.get(url).then((res)=> {

    dispatch({
      type: FETCH_PRODUCTS,
      payload: [...response, ...res.data.data]
    })
  })
};