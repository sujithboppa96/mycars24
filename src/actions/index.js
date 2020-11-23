import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_articles';

const products1 = [
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/6/12/2570456/2570456_90794ecf-e3f4-4896-b466-efe108372d5a_720_720.jpg.webp",
    "name": "Adidas Shoes",
    "price": "250",
    "id": 1,
    "category": "Shoes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/6/5723707/5723707_6ffc1993-cbc3-45d1-8b24-3619c9d39803_1280_1280.webp",
    "name": "Nyke T-Shirt",
    "price": "750",
    "id": 2,
    "category": "Clothes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/22/12590409/12590409_0285b3d3-ab8f-41ca-806c-ff2290ca0f96_700_700.webp",
    "name": "Chain",
    "price": "1250",
    "id": 3,
    "category": "Ornaments"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/290238/290238_7e65adb0-c425-4558-bf2f-ea876cc43c5d_640_640.jpg.webp",
    "name": "Water Bottle",
    "price": "1750",
    "id": 4,
    "category": "Kitchenware"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/27/6041270/6041270_46edf22c-7ac5-4b01-b166-ca9dbd3444be_869_869.jpg.webp",
    "name": "Smart Watch",
    "price": "2250",
    "id": 5,
    "category": "Electronics"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/attachment/2019/11/6/157302369912918/157302369912918_6fbb518f-f0fc-4241-96d3-1dca699f4c15.png.webp",
    "name": "Ear Phones",
    "price": "2750",
    "id": 6,
    "category": "Electronics"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/6/12/2570456/2570456_90794ecf-e3f4-4896-b466-efe108372d5a_720_720.jpg.webp",
    "name": "Nyke Shoes",
    "price": "3250",
    "id": 7,
    "category": "Shoes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/6/5723707/5723707_6ffc1993-cbc3-45d1-8b24-3619c9d39803_1280_1280.webp",
    "name": "Levis Shirt",
    "price": "1600",
    "id": 8,
    "category": "Clothes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/22/12590409/12590409_0285b3d3-ab8f-41ca-806c-ff2290ca0f96_700_700.webp",
    "name": "Joyalukas Chain",
    "price": "3600",
    "id": 9,
    "category": "Ornaments"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/290238/290238_7e65adb0-c425-4558-bf2f-ea876cc43c5d_640_640.jpg.webp",
    "name": "Juice Bottle",
    "price": "1100",
    "id": 10,
    "category": "Kitchenware"
  }
]

const products2 = [
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/6/12/2570456/2570456_90794ecf-e3f4-4896-b466-efe108372d5a_720_720.jpg.webp",
    "name": "Levis Shoes",
    "price": "500",
    "id": 1,
    "category": "Shoes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/6/5723707/5723707_6ffc1993-cbc3-45d1-8b24-3619c9d39803_1280_1280.webp",
    "name": "Adidas T-Shirt",
    "price": "1000",
    "id": 2,
    "category": "Clothes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/22/12590409/12590409_0285b3d3-ab8f-41ca-806c-ff2290ca0f96_700_700.webp",
    "name": " Josalukas Chain",
    "price": "1500",
    "id": 3,
    "category": "Ornaments"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/290238/290238_7e65adb0-c425-4558-bf2f-ea876cc43c5d_640_640.jpg.webp",
    "name": "gym Bottle",
    "price": "100",
    "id": 4,
    "category": "Kitchenware"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/27/6041270/6041270_46edf22c-7ac5-4b01-b166-ca9dbd3444be_869_869.jpg.webp",
    "name": "samsung Watch",
    "price": "2000",
    "id": 5,
    "category": "Electronics"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/attachment/2019/11/6/157302369912918/157302369912918_6fbb518f-f0fc-4241-96d3-1dca699f4c15.png.webp",
    "name": "boat Ear Phones",
    "price": "3000",
    "id": 6,
    "category": "Electronics"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/6/12/2570456/2570456_90794ecf-e3f4-4896-b466-efe108372d5a_720_720.jpg.webp",
    "name": "Levis Shoes",
    "price": "3500",
    "id": 7,
    "category": "Shoes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/11/6/5723707/5723707_6ffc1993-cbc3-45d1-8b24-3619c9d39803_1280_1280.webp",
    "name": "Adidas T-Shirt",
    "price": "1800",
    "id": 8,
    "category": "Clothes"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/22/12590409/12590409_0285b3d3-ab8f-41ca-806c-ff2290ca0f96_700_700.webp",
    "name": "Gold Chain",
    "price": "3600",
    "id": 9,
    "category": "Ornaments"
  },
  {
    "img": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/10/23/290238/290238_7e65adb0-c425-4558-bf2f-ea876cc43c5d_640_640.jpg.webp",
    "name": "Red Bottle",
    "price": "400",
    "id": 10,
    "category": "Kitchenware"
  }
]

export const fetchProducts = (dispatch,index=1, products=[]) => {
  let url;

    url = `https://node-sample-api.herokuapp.com/api/products?page=${index}`
  let response = products ? products: []
  let p = index%2 === 0 ? [...products1]:[...products2]
  axios.get(url).then((res)=> {

    dispatch({
      type: FETCH_PRODUCTS,
      payload: [...response, ...p]
    })
  })
};